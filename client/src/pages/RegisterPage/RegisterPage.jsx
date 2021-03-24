import React, {useEffect} from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { Loader } from '../../Components/Loader/Loader'

toast.configure()
export const RegisterPage = () => {
  const {register, handleSubmit, errors} = useForm()
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const notify = () => {
    toast.info(<p><i style={{marginRight: '10px', fontSize: '25px'}} className="fas fa-info"></i>Enter your details to register an account!</p>)
  }

  useEffect(() => {
    notify()
  }, [])

  const onSubmit = async values => {
    try {
      const data = await request('/api/auth/register', 'POST', {...values})
      console.log('Data', data)
      message(data.message) 
      notifySuccess()
    } catch(e) {
      notifyWarning()
      console.log('Ошибка!')
    }
  }

  const notifyWarning = () => {
    toast.warning(<p><i style={{marginRight: '10px', fontSize: '25px'}}  class="fas fa-exclamation-triangle"></i>This mail is already in use or you entered incorrect data, please try again!</p>)
  }

  const notifySuccess = () => {
    toast.success(<p><i style={{marginRight: '10px', fontSize: '25px'}} class="fas fa-check"></i>You have successfully created an account!</p>)
  }
  
  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <div>
        <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop muted className="video">
        </video>
      </div>
      <div className="intro__content">
          <section className="section-register">
            <div className="container">  
              <div className="row card-wrapper">
                  <div className="card border-light register-card">
                    <div className="card-header">
                      <div className="register-header">
                      <button className="btn btn-violet btn-shadow"><NavLink to={'/auth'}>Back</NavLink></button><h2>Sign Up</h2>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <div className="auth-validation">
                          <label 
                              for="exampleInputEmail1" 
                              className="form-label"
                            >
                              E-mail address
                            </label>
                            {errors.email && <div id="emailHelp" className="form-text text-validation">Enter correct e-mail!</div>}
                        </div>
                        <input 
                          type="text" 
                          className="form-control"  
                          placeholder="Введите e-mail ..." 
                          aria-describedby="emailHelp" 
                          id="email"
                          name="email"
                          ref={register({
                            required: true, 
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i,
                          })}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="auth-validation">
                          <label 
                              for="exampleInputEmail1" 
                              className="form-label"
                            >
                             User-Name
                            </label>
                            {errors.name && <div id="emailHelp" className="form-text text-validation">Enter correct User Name!</div>}
                        </div>
                        <input 
                          placeholder="Введите ваш Username ..." 
                          className="form-control" 
                          id="name"
                          type="text"
                          name="name"
                          ref={register({
                            required: true,
                            minLength: 6
                          })}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="auth-validation">
                          <label 
                              for="exampleInputEmail1" 
                              className="form-label"
                            >
                              Password
                            </label>
                            {errors.password && <div id="emailHelp" className="form-text text-validation">Enter correct password!</div>}
                        </div>
                        <input 
                          placeholder="Введите пароль ..." 
                          className="form-control" 
                          id="password"
                          type="password"
                          name="password"
                          ref={register({
                            required: true,
                            minLength: 6
                          })}
                        />
                      </div>
                      <div className="main-header-buttons">
                        <button 
                          type="submit" 
                          className="btn btn-green rounded-pill"
                          disabled={loading}
                        >
                          Зарегестрироваться
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </section>
        </div>
    </div>
  )
}