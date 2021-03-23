import React from 'react'
import './style.css' 

export const Modal = (props) => {
  return (
    <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}>
      <div className="modal__body">
        <div className="modal__close" onClick={props.onModalClose}>×</div>
          <h5>{props.title}</h5>
          <hr />
          <button className="btn btn-danger" onClick={props.OnModalDelete}>Delete</button>
      </div>  
    </div>
  )
}
