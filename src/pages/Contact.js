import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import travelImg from "../images/travel-world-monuments-concept_117023-14.jpg"



const Contact = () => {
    return (
      
        <div className="container m-5 col-lg-12">
            <img src={travelImg} alt="" />

           
            <h6  className=" text-center p-5"><b> Travel Services</b> Means arranging or booking vaca- tion or travel packages, travel reservations or accommoda- tions, tickets for domestic or foreign travel by air, rail, ship, bus, or other  medium of transportation, or hotel or other lodging accommodations. Travel services include travel related prizes or awards for which the customer must pay a fee or, in connection with the prize or award, expend moneys for the direct or indirect monetary benefit of the person making the award.</h6>
         

            <InputGroup className="mb-3">

                <FormControl aria-label="First name" placeholder="Enter Your First Name" />
                <FormControl aria-label="Last name" placeholder="Enter Your Last Name" />
                <FormControl aria-label="Messege" placeholder="Enter Your Email" />
                <Button variant="outline-secondary" id="button-addon2">Submit</Button>
            </InputGroup>


        </div>
    );
};


export default Contact;