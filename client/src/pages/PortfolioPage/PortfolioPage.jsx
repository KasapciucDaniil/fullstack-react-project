import React from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../Components/Loader/Loader'

import './style.css' 

import portfolio1 from '../../img/portfolio1.jpg'
import portfolio2 from '../../img/portfolio2.jpg'
import portfolio3 from '../../img/portfolio3.jpg'
import portfolio4 from '../../img/portfolio4.jpg'

export const PortfolioPage = () => {
	const {loading} = useHttp()

	if (loading) {
    return <Loader />
  }
  return (
   <section className="section-portfolio">
     <div className="container">
       <div className="row">
          <div className="col-lg-12">
						<h4 className="text-center">My portfolio</h4>
						<p className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nesciunt aut inventore voluptatibus, atque ea adipisci vitae beatae nemo saepe error corrupti molestias consequuntur facilis suscipit quisquam molestiae quo in!</p>
					</div>

					<div className="portfolio-content text-center">
						<div className="row featurette mb-4 project-content">
							<div className="col-md-7">
								<h2 className="featurette-heading">Html responsive project. <span className="text-muted first-span">It’ll blow your mind.</span></h2>
								<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
							</div>
							<div className="col-md-5 progress-item">
								<img src={portfolio1} alt="" className="mb-5" />
								<p><a className="btn btn-yellow btn-shadow" href="https://github.com/KasapciucDaniil/html-responsive">Github</a></p> 
							</div>
						</div>

					<div className="row featurette mb-4 project-content">
						<div className="col-md-7 order-md-2">
							<h2 className="featurette-heading">React crm project. <span className="text-muted first-span">See for yourself.</span></h2>
							<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
						</div>
						<div className="col-md-5 order-md-1 progress-item">
							<img src={portfolio2} alt="" className="mb-5" />
							<p><a className="btn btn-yellow btn-shadow" href="https://github.com/KasapciucDaniil/React-git-crm">Github</a></p> 
						</div>
					</div>

					<div className="row featurette mb-4 project-content">
						<div className="col-md-7">
							<h2 className="featurette-heading">First html project. <span className="text-muted first-span">Checkmate.</span></h2>
							<p className="lead display-4">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
						</div>
						<div className="col-md-5 progress-item">
							<img src={portfolio3} alt="" className="mb-5" />
							<p><a className="btn btn-yellow btn-shadow" href="https://github.com/KasapciucDaniil/React-GitHub-project">Github</a></p> 
						</div>
					</div>

					<div className="row featurette mb-5 project-content">
						<div className="col-md-7 order-md-2">
							<h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted first-span">See for yourself.</span></h2>
							<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
						</div>
						<div className="col-md-5 order-md-1 progress-item">
							<img src={portfolio4} alt="" className="mb-5" />
							<p><a className="btn btn-yellow btn-shadow" href="https://github.com/KasapciucDaniil/Html-project">Github</a></p> 
						</div>
					</div>	
        </div> 
			 </div>
		 </div>
   </section>  
	)
}	