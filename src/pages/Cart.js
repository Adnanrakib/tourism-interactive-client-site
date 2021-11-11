import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { useForm } from "react-hook-form";
import './Cart.css';

const Cart = () => {
          const { serviceId } = useParams();
          const [cart, setCart] = useState({})
          console.log(serviceId);
          useEffect(() => {
                    fetch(`https://haunted-scarecrow-80788.herokuapp.com/bookings/${serviceId}`)
                              .then(res => res.json())
                              .then(data => setCart(data));
          }, [])
///
const { register, handleSubmit, reset } = useForm();
const onSubmit = data => {
  console.log(data);

  axios.post('https://haunted-scarecrow-80788.herokuapp.com/bookings', data)

    .then(res => {
      if (res.data.insertedId) {
        alert('Successfully added');
        reset();

      }

    })
}

          return (


                    <div className="row">
                               <h3 className="bg text-primary">BOOKING YOUR TRIP</h3>
                              <div className="col-lg-7 col-12 mt-5 ">
                                        <img src={cart.img} alt="" />
                                        <h2>{cart.name}</h2>
                                        <h6>{cart.desc}</h6>
                                        <h4>Payment {cart.price}</h4>
                                        {/* <h3>This cart Details store: {serviceId}</h3> */}
                                        
                                        </div>
                                        <div className="col-lg-5 col-12 booking form mt-5" >
                                        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name",)} placeholder="Name" />

        <textarea {...register("Email",)} placeholder="Email" />
        <input {...register("Password", { required: true, maxLength: 20 })}
          placeholder="Password" />
        <input type="Destination" {...register("Place",)} placeholder="Destination" />
        <button  className="button">Book Now
        </button>
      </form>
                                        </div>
                                       

                             
                    </div>
          );
};

export default Cart;