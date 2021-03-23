import React, { useEffect, useState, useCallback, useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { Loader } from '../../Components/Loader/Loader'
import './style.css' 

import digital from '../../img/digital.png'
import like from '../../img/like3.png'
import dream from '../../img/dream.png' 
import dream1 from '../../img/dream1.jpg' 
import dream3 from '../../img/dream3.jpg' 
import dream4 from '../../img/dream4.jpg' 
import main from '../../img/img.png'
import work from '../../img/work.png'
import branding from '../../img/branding.png'
import review from '../../img/review2.png' 
import human from '../../img/human.png'
import star from '../../img/star.png'
import get from '../../img/get.png'

toast.configure()
export const HomePage = () => {
  const {loading, request} = useHttp()
  const auth = useContext(AuthContext)
  const [users, setUsers] = useState('')

  const notify = () => {
    toast.info(<div><i style={{marginRight: '5px', fontSize: '25px'}} className="fas fa-home"></i> Welcome to home, {users.name}!</div>)
  }

  useEffect(() => {
    if (users.name) {  
      return notify()
    }
  },[notify])

  const fetchedName = useCallback( async () => {
    try {
      const fetched = await request('/api/auth/info', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      })
      setUsers(fetched)
    } catch (e) {}
  }, [auth.token, request])

  useEffect(() => {
    fetchedName() 
  }, [fetchedName])

  // const notifyWarning = () => {
  //   toast.warning(<p><i style={{marginRight: '10px', fontSize: '25px'}}  class="fas fa-exclamation-triangle"></i>An error occured, please try to re-login to your account!</p>)
  // }

  // useEffect(() => {
  //   if (!users.name) {
  //     return notifyWarning()
  //   }
  // }, [])

  if (loading) {
    return <Loader />
  }

  return (
   <div>
    <section className="section-home">
       <div className="container">
         <div className="row">
           <div className="col-lg-6 mb-5">
             <img src={digital} className="mb-3" alt="" />
             <ul class="nav nav-pills" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link rounded-pill active" id="webdesign-tab" data-bs-toggle="tab" href="#webdesign" role="tab" aria-controls="webdesign" aria-selected="true">Webdesign</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link rounded-pill" id="mobileapp-tab" data-bs-toggle="tab" href="#mobileapp" role="tab" aria-controls="mobileapp" aria-selected="false">Mobile app</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link rounded-pill" id="branding-tab" data-bs-toggle="tab" href="#branding" role="tab" aria-controls="branding" aria-selected="false">Branding</a>
              </li>
            </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="webdesign" role="tabpanel" aria-labelledby="webdesign-tab"><p class="watch-tab-text">Webdesgin Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellendus minus rerum quas aspernatur sequi reprehenderit omnis quaerat sunt ab delectus natus rem magnam, consequatur beatae eos explicabo, veritatis atque.</p>
                  <p><a href class="btn btn-black btn-shadow">Read more</a></p></div>
                <div class="tab-pane fade" id="mobileapp" role="tabpanel" aria-labelledby="mobileapp-tab"><p class="watch-tab-text">Mobile Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis eveniet accusamus, aspernatur, quasi laboriosam nemo corporis repudiandae hic sed, dolor ipsum perspiciatis molestiae dignissimos architecto. Harum repellendus minima vitae?</p>
                  <p><a href class="btn btn-black btn-shadow">Read more</a></p></div>
                <div class="tab-pane fade" id="branding" role="tabpanel" aria-labelledby="branding-tab"><p class="watch-tab-text">Brending Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veritatis minus nihil delectus consequuntur beatae quod id perferendis optio nam quasi fuga velit excepturi voluptate molestias, doloremque commodi quis dignissimos.</p>
                  <p><a href class="btn btn-black btn-shadow">Read more</a></p></div>
              </div>
           </div>   

           <div className="col-lg-6 text-center d-none d-sm-block">
             <img src={like} alt="" />  
           </div>
         </div>
       </div>
     </section>
     
    <section className="section-dream">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={dream} alt="" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam odit aut illo dignissimos, illum optio ut inventore. Assumenda id, suscipit rem neque obcaecati ex corrupti labore nobis explicabo. Aliquam.</p>
          </div>  
          
          <div className="col-md-4 progress-item">
                <div className="text-center"><img className="img-item" src={dream3} alt="" /></div>
                <h2>Branding</h2>
                <p>Brending Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veritatis minus nihil delectus consequuntur beatae quod id perferendis optio nam quasi fuga velit excepturi voluptate molestias, doloremque commodi quis dignissimos.</p>
             </div> 
             
             <div className="col-md-4 progress-item">
              <div className="text-center"><img className="img-item" src={dream1} alt="" /></div>
              <h2>Graphic Design</h2>
              <p>Webdesgin Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellendus minus rerum quas aspernatur sequi reprehenderit omnis quaerat sunt ab delectus natus rem magnam, consequatur beatae eos explicabo, veritatis atque.</p>
           </div> 

           <div className="col-md-4 progress-item">
            <div className="text-center"><img className="img-item" src={dream4} alt="" /></div>
            <h2>Creative Idea</h2>
            <p>Creative Idea Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veritatis minus nihil delectus consequuntur beatae quod id perferendis optio nam quasi fuga velit excepturi voluptate molestias, doloremque commodi quis dignissimos.</p>
         </div>  
         <p><NavLink className="btn btn-yellow btn-shadow" to={'/about'}>Read more</NavLink></p> 
        </div>
      </div>
    </section> 
   
    <section className="section-work section-tabs">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <img src={work} alt="" />
            <p className="work-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ex amet quibusdam reprehenderit omnis, quaerat rem, totam odit ab mollitia esse eaque aperiam consectetur quasi.</p>
          </div>
          <div className="col-md-12 text-center">
            <div className="row gallery">
              <img src={main} alt="" />
              <p><a href className="btn btn-black btn-shadow">Read more</a></p>
            </div>
          </div>
          
        </div>
      </div> 
    </section>
  
    <section className="section-branding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img src={branding} alt="" />
          </div>  
        </div> 
      </div>
    </section> 
 
    <section className="section-review">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={review} alt="" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam odit aut illo dignissimos, illum optio ut inventore. Assumenda id, suscipit rem neque obcaecati ex corrupti labore nobis explicabo. Aliquam.</p>
          </div>  
          
          <div class="col-lg-4 progress-item">
          <div className="card text-white bg-dark mb-5 card-figure">
              <div className="card-body">
                <img className="human-img" src={human} alt="" />
                <div className="card-content">
                  <h2 className="card-title">David Smith</h2>
                  <strong>Frontend Developer</strong>
                </div>
              </div>
              <p>David Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam odit aut illo dignissimos, illum optio ut inventore.</p>
                <div className="star-quote">
                  <img className="star" src={star} alt="" />
                  <i className="fas fa-quote-right"></i>
                </div>
            </div>
             </div> 
             
             <div class="col-lg-4 progress-item">
             <div className="card text-white bg-dark mb-5 card-figure">
              <div className="card-body">
                <img className="human-img" src={human} alt="" />
                <div className="card-content">
                  <h2 className="card-title">David Smith</h2>
                  <strong>Frontend Developer</strong>
                </div>
              </div>
              <p>David Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam odit aut illo dignissimos, illum optio ut inventore.</p>
              <div className="star-quote">
                  <img className="star" src={star} alt="" />
                  <i className="fas fa-quote-right"></i>
                </div>
            </div>
           </div> 

           <div className="col-lg-4 progress-item">
           <div className="card text-white bg-dark mb-5 card-figure">
              <div className="card-body">
                <img className="human-img" src={human} alt="" />
                <div className="card-content">
                  <h2 className="card-title">David Smith</h2>
                  <strong>Frontend Developer</strong>
                </div>
              </div>
              <p>David Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam odit aut illo dignissimos, illum optio ut inventore.</p>
                <div className="star-quote">
                  <img className="star" src={star} alt="" />
                  <i className="fas fa-quote-right"></i>
                </div>
            </div>
         </div>  
         <p className="text-center"><a href className="btn btn-yellow btn-shadow">Know more</a></p> 
        </div>
      </div>
    </section>  
   
    <section className="section-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <img src={get} alt="" />  
            <p className="work-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam odit aut illo dignissimos, illum optio ut inventore. Assumenda id, suscipit rem neque obcaecati ex corrupti labore nobis explicabo. Aliquam.</p>
          </div>  

          <div className="col-lg-6 mb-5">
            <h4>Adress:</h4>
            <p>123 Main Street Your City New York <br />USA 789456</p>
            <p className="form-dots">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •</p>
            <h4>Call us:</h4>
            <p>+123 4567 890 +123 4567 890</p>
            <p className="form-dots">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •</p>
            <h4>Email:</h4>
            <p>free@psdfreebies.com</p>
          </div>

          <div className="col-lg-6">
          <div className="row text-left">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Name..." aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="E-mail..." aria-label="Last name" />
              </div>
            </div>
            <div className="row text-left">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Name..." aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="E-mail..." aria-label="Last name" />
              </div>
            </div>
            <div className="input-group">
             <input type="email" className="form-control last-from" placeholder="Message..." aria-label="Last name" />
            </div>
            <p><a href className="btn btn-black btn-shadow">Submit</a></p>
          </div>
        </div>
      </div> 
    </section> 

   </div>   
  )
}