import React, {useEffect, useState} from 'react'
import './style.css'
import video from '../../city4.mp4'  
import { NavLink, useHistory } from 'react-router-dom'

import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'

export const RegisterPage = () => {
  const history = useHistory()
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()
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

  const registerHandler = async event => {
    event.preventDefault()
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data', data)
      message(data.message) 
      history.push('/auth')
    } catch(e) {
      console.log('Ошибка!')
    }
  }

  return (
    <div>
      <div>
      <video src={video} autoPlay loop muted className="video">
      </video>
      </div>
      <div className="intro__content">
          <section className="section-register">
            <div className="container">  
              <div className="row card-wrapper">
                  <div className="card border-light register-card">
                    <div className="card-header">
                      <div className="register-header">
                      <button className="btn btn-violet btn-shadow"><NavLink to={'/auth'}>Back</NavLink></button><h2>Registration</h2>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label 
                          for="exampleInputEmail1" 
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Введите e-mail ..." 
                          aria-describedby="emailHelp" 
                          id="email"
                          name="email"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <label 
                          for="exampleInputPassword1" 
                          className="form-label"
                        >
                          Username
                        </label>
                        <input 
                          placeholder="Введите ваш Username ..." 
                          className="form-control" 
                          id="name"
                          type="text"
                          name="name"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <label 
                          for="exampleInputPassword1" 
                          className="form-label"
                        >
                          Password
                        </label>
                        <input 
                          placeholder="Введите пароль ..." 
                          className="form-control" 
                          id="password"
                          type="password"
                          name="password"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="main-header-buttons">
                        <button 
                          type="submit" 
                          className="btn btn-green rounded-pill"
                          onClick={event => registerHandler(event)}
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