import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './style.css' 

export const UserPage = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = async event => {
    event.preventDefault()
      auth.logout()
      history.push('/auth')
  }  

  return (
    <div>
      <button onClick={logoutHandler} className="btn btn-success">Logout</button>
    </div>
  )
}