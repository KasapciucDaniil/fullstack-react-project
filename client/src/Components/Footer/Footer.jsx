import React from 'react'
import './style.css' 

import footer from '../../img/footer.png'
import footer1 from '../../img/footer1.jpg'
import footer2 from '../../img/footer2.jpg'
import footer3 from '../../img/footer3.jpg'
import footer4 from '../../img/footer4.jpg'

export const Footer = () => {
  return (
    <div className="footer">
      <section className="section-footer">
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-6">
                    <h5>Company</h5>
                    <ul>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Aproach</a></li>
                      <li><a href="/">Sustainability</a></li>
                      <li><a href="/">Careers</a></li>
                      <li><a href="/">News</a></li>
                    </ul>  
                  </div>
                  <div className="col-6">
                    <h5>Pages</h5>
                    <ul>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Aproach</a></li>
                      <li><a href="/">Sustainability</a></li>
                      <li><a href="/">Careers</a></li>
                      <li><a href="/">News</a></li>
                    </ul>  
                  </div>
                  <div className="col-6">
                    <h5>Service</h5>
                    <ul>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Aproach</a></li>
                      <li><a href="/">Sustainability</a></li>
                      <li><a href="/">Careers</a></li>
                      <li><a href="/">News</a></li>
                    </ul>  
                  </div>
                  <div className="col-6">
                    <h5>Follow us</h5>
                    <img src={footer} alt="" /> 
                  </div>
              </div>
              </div>

              <div className="col-md-6 footer-images">
                <div className="row">
                  <div className="col-6 progress-item">
                    <img src={footer1} alt="" />
                  </div>
                  <div className="col-6 progress-item">
                    <img src={footer2} alt="" />
                  </div>
                  <div className="col-6 progress-item">
                    <img src={footer3} alt="" />
                  </div>
                  <div className="col-6 progress-item">
                    <img src={footer4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="copyright">
          <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <ul className="nav">
                    <li className="nav-item">
                      <span className="nav-link">&copy; 2021 Theme by psdfreebies.com</span>
                    </li>
                    <li className="nav-item"><a href className="nav-link">Privacy</a></li>
                    <li className="nav-item"><a href className="nav-link">Terms of Use</a></li>
                    <li className="nav-item"><a href className="nav-link">Site Map</a></li>
                  </ul> 
                </div>
            </div> 
          </div>
        </div> 
      </div>    
  )
}