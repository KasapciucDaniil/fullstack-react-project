import React from 'react'
import './style.css' 
import { NavLink } from 'react-router-dom'

import logo from '../img/logo.png'

export const Header = () => {
  return (
    <header className="main-header">
     <nav className="navbar navbar-expand-lg menu-header">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="" />
      </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fas fa-bars"></span>
        </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-position header-links">
          <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to={'/about'}>About</NavLink></li>
          <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Note</a></li>
          <li className="nav-item"><NavLink className="nav-link" to={'/user'}>User</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
  )
}