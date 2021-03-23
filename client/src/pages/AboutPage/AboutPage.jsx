import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../Components/Loader/Loader'
import './style.css'

import dream1 from '../../img/dream1.jpg' 
import dream3 from '../../img/dream3.jpg' 
import dream4 from '../../img/dream4.jpg' 

export const AboutPage = () => {
  const {loading} = useHttp()

  if (loading) {
    return <Loader />
  }

  return (
    <div className="about-page">
      
      <ul className="cb-slideshow">
            <li><span /></li>
            <li><span /></li>
            <li><span /></li>
            <li><span /></li>
            <li><span /></li>
            <li><span /></li>
        </ul>
        <div className="carousel__content">
          <section className="section_carousel">
            <div className="container">  
              <div className="col-lg-12 text-center">
                <h4>Need Help?</h4>
                 <h5>Don't Forget to Contact With Us</h5>
                 <div className="carousel_information">
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error, sed quibusdam, repudiandae inventore alias, at dolores delectus quasi consequuntur sequi odio vitae voluptatibus eius.</p>
                  <div className="row text-left">
                   <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Name" aria-label="First name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="email" className="form-control" placeholder="E-mail" aria-label="Last name" />
                    </div>
                  </div>
                  <div className="col-md-12 main-header-buttons">
                    <button type="submit" className="btn btn-violet rounded-pill"><NavLink to={'/user'}>Next</NavLink></button>
                  </div>   
                 </div>
                </div>
              </div>
          </section>
        </div>

    <div className="about-content text-center">
     <div className="row featurette mb-5">
          <div className="col-md-7 content-item">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted first-span">It’ll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 progress-item">
            <img src={dream1} alt="" />
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7 order-md-2 content-item">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1 progress-item">
            <img src={dream4} alt="" />
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7 content-item">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead display-4">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 progress-item">
            <img src={dream3} alt="" />
          </div>
        </div>
      </div>  
    </div>
  )
}