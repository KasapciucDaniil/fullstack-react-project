import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './style.css' 


import digital from '../../img/digital.png'
import like from '../../img/like.png'
import dream from '../../img/dream.png' 
import dream1 from '../../img/dream1.jpg' 
import dream3 from '../../img/dream3.jpg' 
import dream4 from '../../img/dream4.jpg' 

export const HomePage = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = async event => {
    event.preventDefault()
      auth.logout()
      history.push('/auth')
  } 

  return (
   <div>
    <section className="section-home">
       <div className="container">
         <div className="row">
           <div className="col-lg-6 mb-5">
             <img src={digital} alt="" />
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
                  <p><a href="#" class="btn btn-black btn-shadow">Read more</a></p></div>
                <div class="tab-pane fade" id="mobileapp" role="tabpanel" aria-labelledby="mobileapp-tab"><p class="watch-tab-text">Mobile Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis eveniet accusamus, aspernatur, quasi laboriosam nemo corporis repudiandae hic sed, dolor ipsum perspiciatis molestiae dignissimos architecto. Harum repellendus minima vitae?</p>
                  <p><a href="#" class="btn btn-black btn-shadow">Read more</a></p></div>
                <div class="tab-pane fade" id="branding" role="tabpanel" aria-labelledby="branding-tab"><p class="watch-tab-text">Brending Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veritatis minus nihil delectus consequuntur beatae quod id perferendis optio nam quasi fuga velit excepturi voluptate molestias, doloremque commodi quis dignissimos.</p>
                  <p><a href="#" class="btn btn-black btn-shadow">Read more</a></p></div>
              </div>
           </div>   

           <div className="col-lg-6 text-center">
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
          
          <div class="col-md-4 progress-item">
                <div className="text-center"><img className="img-item" src={dream3} alt="" /></div>
                <h2>Branding</h2>
                <p>Brending Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veritatis minus nihil delectus consequuntur beatae quod id perferendis optio nam quasi fuga velit excepturi voluptate molestias, doloremque commodi quis dignissimos.</p>
             </div> 
             
             <div class="col-md-4 progress-item">
              <div className="text-center"><img className="img-item" src={dream1} alt="" /></div>
              <h2>Graphic Design</h2>
              <p>Webdesgin Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellendus minus rerum quas aspernatur sequi reprehenderit omnis quaerat sunt ab delectus natus rem magnam, consequatur beatae eos explicabo, veritatis atque.</p>
           </div> 

           <div class="col-md-4 progress-item">
            <div className="text-center"><img className="img-item" src={dream4} alt="" /></div>
            <h2>Creative Idea</h2>
            <p>Creative Idea Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veritatis minus nihil delectus consequuntur beatae quod id perferendis optio nam quasi fuga velit excepturi voluptate molestias, doloremque commodi quis dignissimos.</p>
         </div>  
         <p><a href="#" class="btn btn-yellow btn-shadow">Read more</a></p> 
        </div>
      </div>
    </section> 
    </div>   
  )
}