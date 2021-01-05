import React, { useEffect, useState, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
import video from '../../city2.mp4'  

import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {error, clearError, request} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async event => {
    event.preventDefault()
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch(e) {}
  } 

  return (
    <div>
      <div>
      <video src={video} autoPlay loop muted className="video">
      </video>
      </div>
      <div className="intro__content">
          <section className="section-auth">
            <div className="container">  
              <div className="row card-wrapper">
                  <div className="card border-light auth-card">
                    <div className="card-header"><h2>Login</h2></div>
                    <form>
                      <div className="mb-3">
                        <label 
                          for="exampleInputEmail1" 
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input 
                          className="form-control" 
                          placeholder="Введите e-mail" 
                          id="email"
                          type="text"
                          name="email"
                          aria-describedby="emailHelp" 
                          onChange={changeHandler}
                          value={form.email}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                        <label 
                          for="exampleInputPassword1" 
                          className="form-label"
                        >
                          Password
                        </label>
                        <input 
                          placeholder="Введите пароль" 
                          className="form-control" 
                          id="password"
                          name="password"
                          type="password"
                          onChange={changeHandler}
                          value={form.password}
                        />
                      </div>
                      <div className="main-header-buttons">
                        <button 
                          type="submit" 
                          className="btn btn-violet rounded-pill"
                          onClick={loginHandler}
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


