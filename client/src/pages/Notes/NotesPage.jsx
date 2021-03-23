 // eslint-disable-next-line
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate'
import './style.css' 

import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../../Components/Loader/Loader'

import img from '../../img/note-img.jpg'
import notebook from '../../img/note-image.jpg'
import logo from '../../img/logo.svg'

toast.configure()
export const NotesPage = () => {
  const {register, handleSubmit, errors} = useForm() 
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {request, loading} = useHttp()
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [types, setTypes] = useState('')
  const [search, setSearch] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 4  
  const pagesVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(notes.length / usersPerPage)

  const fetchedNote = useCallback( async () => {
    try {
      const fetched = await request('/api/note', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      }) 
      setNotes(fetched)
    } catch (e) {}
  }, [auth.token, request])

  useEffect(() => {
    fetchedNote() 
  }, [fetchedNote])

  const onSubmit = async values => {
    try {
      const data = await request('/api/note/generate', 'POST', 
        {
          ...values,
          title,
          types,
          text
        }, 
        {
          Authorization: `Bearer ${auth.token}`
        }
      ) 
      setTitle('')
      setText('')
      setTypes('')
      notify()
      fetchedNote()
      console.log(data)
    } catch(e) {
      notifyWarning()
    }
  }

  const notify = () => {
    toast.success(<p><i style={{marginRight: '10px', fontSize: '25px'}} className="fas fa-check"></i>You create new note!</p>)
  }

  const notifyDelete = () => {
    toast.error(<p><i style={{marginRight: '10px', fontSize: '25px'}} className="fas fa-trash-alt"></i>You have successfully deleted your note!</p>)
  }

  const notifyWarning = () => {
    toast.warning(<p><i style={{marginRight: '10px', fontSize: '25px'}}  className="fas fa-exclamation-triangle"></i>Some error occured, please try again!</p>)
  }

  const deleteHandler = async (event, item) => {
    event.preventDefault()

    try {
      const data = await request('/api/note/deleteNote','DELETE', item, {
        Authorization: `Bearer ${auth.token}`
      })
      fetchedNote()
      notifyDelete()

      message(data.message)
    } catch(e) {
      console.log(e)
    }
  }

  const displayNotes = notes.slice(pagesVisited, pagesVisited + usersPerPage)
  .filter((notes) => {
    if (search === "") {
      return notes
    } else if (notes.title.toLowerCase().includes(search.toLowerCase())) {
      return notes
    }
  }).map(note => {
    return (
      <div className="col-lg-6 progress-item">
        <div className="card">
          <img src={notebook} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p className="card-text">{note.text}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{note.types}</li>
          </ul>
          <div className="card-body">
          <button
            className="btn btn-warning btn-danger-shadow"
            onClick={event => deleteHandler(event, note)}
            >
              Delete
          </button>
          </div>
        </div> 
      </div>
    )
  })

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <section className="section-notes">
      <div className="container">
       <div class="row">
        <div class="col-lg-6 mb-5">
         <div className="form-notes">
          <div className="note-heading">
            <h3 class="main-header-title">Dream Big Inspire the World</h3> 
            <h4>We turn creative ideas into your business</h4>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-lg-12 form-note">
              <div className="row text-left">
                  <div className="col-md-6">
                  <div className="auth-validation">
                        <label 
                            for="exampleInputEmail1" 
                            className="form-label watch-tab-text note-label"
                          >
                          Title
                          </label>
                          {errors.title && <div id="emailHelp" className="form-text text-validation note-validation">Enter minimum 6 letters!</div>}
                      </div>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Title..." 
                      name="title"
                      aria-label="First name" 
                      onChange={e => setTitle(e.target.value)}
                      ref={register({
                        required: true,
                        minLength: 6
                      })}
                    />
                  </div>
                  <div className="col-md-6">
                  <div className="auth-validation">
                        <label 
                            for="exampleInputEmail1" 
                            className="form-label watch-tab-text note-label"
                          >
                          Types
                          </label>
                          {errors.types && <div id="emailHelp" className="form-text text-validation note-validation">Enter minimum 4 letters!</div>}
                      </div>
                    <input 
                      className="form-control" 
                      placeholder="News or Note..." 
                      aria-label="Last name" 
                      name="types"
                      onChange={e => setTypes(e.target.value)}
                      ref={register({
                        required: true,
                        minLength: 4,
                        maxLength: 5
                      })}
                    />
                  </div>
                </div>
                <div className="input-group message-group">
                <div className="auth-validation">
                        <label 
                            for="exampleInputEmail1" 
                            className="form-label watch-tab-text note-label"
                          >
                          Message
                          </label>
                          {errors.message && <div id="emailHelp" className="form-text text-validation note-validation">Enter minimum 10 letters!</div>}
                      </div>
                <input 
                    className="form-control last-from" 
                    placeholder="Message..." 
                    aria-label="Last name" 
                    name="message"
                    onChange={e => setText(e.target.value)}
                    ref={register({
                      required: true,
                      minLength: 6
                    })}
                  />
                </div>
                <button
                  type="submit" 
                  href 
                  className="btn btn-info btn-shadow mt-3"
                >
                  { 
                    loading
                    ? <div><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...</div>
                    : 'Create'
                  }
              </button>
            </div>
           </form>
          </div>
        </div>
          <div class="col-lg-6 text-center">
            <img className="d-none d-lg-block page-note-img" src={img} alt="" />
          </div>
        </div>

        <hr />

          <form className="d-flex col-lg-6 form-search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Enter a title for the note ..." 
                aria-label="Search" 
                onChange={(event) => {setSearch(event.target.value)}}
              />
              <button 
                className="btn btn-info btn-shadow btn-search" 
                type="submit"
              >
                Search
              </button>
            </form>

        {
         `${displayNotes}`
         ? <div>     
            <div className="container">
              <div className="row">
                {displayNotes}
              </div> 
            </div>
         
            <ReactPaginate className="col-lg-4"
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount} 
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />  
          </div>
         : <div className="col-lg-12 notes-notification">
            <h5>There are no notes yet, create your first note.<br /> On this page you can create your notes or news to keep abreast of all your tasks.</h5>
            <div className="col-lg-3"> 
              <img 
                src={logo} 
                className="App-logo" 
                alt="logo" 
              />
            </div>
           </div>
        } 
        
      </div>  
    </section>
  )
}