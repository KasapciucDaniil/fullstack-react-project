import React, { useContext, useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { Loader } from '../../Components/Loader/Loader'

import './style.css' 

import foto from '../../img/avatar.png'

toast.configure()
export const UserPage = () => {
  const {register, handleSubmit, errors} = useForm()
  const auth = useContext(AuthContext)
  const history = useHistory()
  const [users, setUsers] = useState('')
  const message = useMessage()
  const {request, loading} = useHttp()
  const [form, setForm] = useState({})

  const fetchedName = useCallback( async () => {
    try {
      const fetched = await request('/api/auth/info', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      })
      setUsers(fetched)
    } catch (e) {}
  }, [auth.token, request])

  useEffect(() => {
    fetchedName() 
  }, [fetchedName])

  const onSubmit = async values => {
    try {
      const data = await request('/api/auth/change', 'PATCH', {...values}, {
        Authorization: `Bearer ${auth.token}`
      })
      fetchedName()
      notify()

      message(data.message)
    } catch(e) {
      notifyWarning()
    }
  }

  const notify = () => {
    toast.success(<p><i style={{marginRight: '10px', fontSize: '25px'}} className="fas fa-check"></i>You have successfully changed your User name!</p>)
  }

  const notifyWarning = () => {
    toast.warning(<p><i style={{marginRight: '10px', fontSize: '25px'}}  className="fas fa-exclamation-triangle"></i>Some error occured, please try again, try to re-login to your account!</p>)
  }

  const logoutHandler = async event => {
    event.preventDefault()
      auth.logout()
      history.push('/auth')
  }  

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const passwordHandler = async event => {
    event.preventDefault()
    try {
      const data = await request('/api/auth/changePassword', 'PATCH', {...form}, {
        Authorization: `Bearer ${auth.token}`
      })
      fetchedName()

      message(data.message)
    } catch(e) {}
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <section className="section-user">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <img src={foto} alt="" />   
            </div>
            <div className="col-lg-6">
              <h4>{users.name}</h4>
              <h5 className="mb-4">{users.email}</h5>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active rounded-pill" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">About Me</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile data</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Account management</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><p class="watch-tab-text">About lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellendus minus rerum quas aspernatur sequi reprehenderit omnis quaerat sunt ab delectus natus rem magnam, consequatur beatae eos explicabo, veritatis atque.</p></div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <h5 className="mb-3">Current UserName: {users.name}</h5>
                    <h5>Current E-mail: {users.email}</h5>
                    <div>
                      <h5 className="mb-3">About me:</h5><p className="watch-tab-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellat laudantium amet fugit, nostrum fugiat, reiciendis magni doloribus repudiandae quidem ea beatae dolor! Voluptatibus qui recusandae perferendis natus eius obcaecati.</p>
                    </div>
                  </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                      <div className="auth-validation">
                        <label 
                            for="exampleInputEmail1" 
                            className="form-label watch-tab-text"
                          >
                          User Name
                          </label>
                          {errors.name && <div id="emailHelp" className="form-text text-validation">Enter minimum 6 letters!</div>}
                      </div>
                      <input 
                        id="name"
                        type="text"
                        name="name"
                        className="form-control" 
                        ref={register({
                          required: true,
                          minLength: 6
                        })}
                      />
                      <button 
                        type="submit" 
                        className="btn btn-violet btn-violet-shadow mb-3 mt-3"
                      >
                        Submit
                      </button>
                      <hr />
                    </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label watch-tab-text">New  password</label>
                    <input 
                      id="password" 
                      type="password"  
                      name="password" 
                      className="form-control" 
                      onChange={changeHandler} 
                    />
                    <div id="emailHelp" className="form-text watch-tab-text mb-2">We'll never share your password with anyone else.</div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-violet btn-violet-shadow mb-3"
                    onClick={event => passwordHandler(event)}
                  >
                    Submit
                  </button>
                </form>
                <hr />
                <p className="logout-btn" onClick={logoutHandler}><a 
                href className="btn btn-pink btn-shadow">Logout</a></p> 
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </div>
  )
}