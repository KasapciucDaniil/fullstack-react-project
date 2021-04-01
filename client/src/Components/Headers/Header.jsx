import React from 'react'
import './style.css' 
import { NavLink } from 'react-router-dom'

import logo from '../../img/logo.png'

export const Header = () => {
  return (
      <header className="main-header">
        <nav className="navbar navbar-expand-lg menu-header">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fas fa-bars"></span>
          </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto navbar-position header-links">
            <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/about'}>About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/portfolio'}>Portfolio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/notes'}>Notes</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/user'}>User</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
