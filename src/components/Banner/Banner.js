import React from 'react';
import bgImg from "../../images/banner.png"
import './Banner.css'


const Banner = () => {
          return (
                    <div className="row">
                              <div className="col-lg-12 col-sm-12">
                              <img className="img-fluid" src={bgImg} alt="" />
                           
                              
                              
                              <h1 className="about">Time to Travel</h1>
                              <h6 className="paragraph">Tourism plays an important role for the nearly all WTO members. especially in terms of its Contribution to emplpyment GDP.and the genaration of foreign exchange... Tourism-related services are typically labour-intensive, with numerous links to other major segments of the of the economy, Such a transpot cultural and creative services, or financial and insurance services.</h6>
                              </div>
                    </div>
          );
};

export default Banner;