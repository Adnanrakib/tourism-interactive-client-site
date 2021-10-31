import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Booking.css';

const Booking = () => {
          const { register, handleSubmit, reset } = useForm();
          const onSubmit = data => {
                    console.log(data);

                    axios.post('http://localhost:5000/booking', data)
                    .then(res =>{
                              if(res.data.insertedId){
                                        alert('Successfully added');
                                        reset();

                              }

                    })
          }


          return (
                    <div className="booking">
                              <h1>Booking Your Service</h1>
                              <form onSubmit={handleSubmit(onSubmit)}>
                              <input type="name" {...register("name",)} placeholder="Name" />
     
      <textarea {...register("desc",)} placeholder="description" />
      <input {...register("price", { required: true, maxLength: 20 })}
      placeholder="Price" />
      <input type="img url" {...register("img",)} placeholder="Image url" />
      <input className="button" type="submit" />
    </form>
                          
                    </div>
          );
};

export default Booking;