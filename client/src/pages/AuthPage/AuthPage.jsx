/* eslint-disable */
import React, { useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {NavLink} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import './style.css'

import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext'
import { Loader } from '../../Components/Loader/Loader'

toast.configure()
export const AuthPage = () => {
  const {register, handleSubmit, errors} = useForm()
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {error, clearError, request, loading} = useHttp()

  const onSubmit = async values => {
    try {
      const data = await request('/api/auth/login', 'POST', {...values})
      auth.login(data.token, data.userId)
    } catch(e) {
      notifyWarning()
      console.log(e)
    }
  }
  
  const notify = () => {
    toast.info(<p><i style={{marginRight: '10px', fontSize: '25px'}} className="fas fa-info"></i>Welcome to the web app! Register yourself an account and test this application!</p>)
  }

  const notifyWarning = () => {
    toast.warning(<p><i style={{marginRight: '10px', fontSize: '25px'}}  class="fas fa-exclamation-triangle"></i>You entered incorrect data, please try again!</p>)
  }

  useEffect(() => {
    notify()
  }, [])

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError, notify])

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
          <section className="section-auth">
            <div className="container">  
              <div className="row card-wrapper">
                  <div className="card border-light auth-card">
                    <div className="card-header"><h2>Sign In</h2></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                      <div className="auth-validation">
                      <label 
                          for="exampleInputEmail1" 
                          className="form-label"
                        >
                          Email address
                        </label>
                        {errors.email && <div id="emailHelp" className="form-text text-validation">Enter your email.</div>}
                      </div>
                        <input 
                          className="form-control" 
                          placeholder="Введите e-mail" 
                          id="email"
                          type="text"
                          name="email"
                          aria-describedby="emailHelp" 
                          ref={register({
                            required: true, 
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i,
                          })}
                        />
                      </div>
                      <div className="mb-4">
                        <div className="auth-validation">
                          <label 
                            for="exampleInputPassword1" 
                            className="form-label"
                          >
                            Password
                          </label>
                          {errors.password && <div id="emailHelp" className="form-text text-validation">Enter your correct password.</div>}
                        </div>
                        <input 
                          placeholder="Введите пароль" 
                          className="form-control" 
                          id="password"
                          name="password"
                          type="password"
                          ref={register({
                            required: true,
                            minLength: 6
                          })}
                        />
                      </div>
                      <div className="main-header-buttons">
                        <button 
                          type="submit" 
                          className="btn btn-violet rounded-pill"
                          >
                            Войти
                          </button>
                        
                        <button 
                          type="submit" 
                          className="btn btn-pink rounded-pill"
                        >
                          <NavLink to={'/register'}>Регистрация</NavLink>
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


