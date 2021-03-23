import React from 'react'
// import './style.css' 

export const Loader = () => {
  return (
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="spinner-border text-danger m-10" style={{width: '14rem', height: '14rem', marginTop: '11rem', marginBottom: '11rem'}} role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  )
}