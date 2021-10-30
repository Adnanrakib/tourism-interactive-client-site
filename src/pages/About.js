import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Img from "../images/images (2).jpg"


const About = () => {
    return (
        <div className="container m-5">
            <div className="row">
              
                <div className="about-left col-md-6">
                    <img src={Img} alt="" />
                   <h6><b> Travel Services</b> Means arranging or booking vaca- tion or travel packages, travel reservations or accommoda- tions, tickets for domestic or foreign travel by air, rail, ship, bus, or other  medium of transportation, or hotel or other lodging accommodations. Travel services include travel related prizes or awards for which the customer must pay a fee or, in connection with the prize or award, expend moneys for the direct or indirect monetary benefit of the person making the award.</h6>
                </div>
                <div className="about-right col-md-6">
                    <div>
                        <p> <b>Travel The World
                     </b> </p>
                        <ProgressBar animated now={95} />
                    </div>
                    <div>
                        <p> <b> World Tourism Services</b> </p>
                        <ProgressBar animated now={80} />
                    </div>
                    <div>
                        <p> <b>Find Your Beautiful Moments</b> </p>
                        <ProgressBar animated now={70} />
                    </div>
                    <div>
                    <p> <b>Be happy Safe Journey</b> </p>
                        <ProgressBar animated now={65} />
                    </div>
                    <div>
                        <p> <b>Happy Journey</b> </p>
                        <ProgressBar animated now={60} />
                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;