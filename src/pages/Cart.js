import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'

const Cart = () => {
          const {serviceId} = useParams();
          const [service, setService] = useState({})
          useEffect ( () =>{
                    fetch(`http://localhost:5000/booking${serviceId}`)
                    .then(res => res.json())
                    .then(data => setService(data));
          }, [])

          return (

                    <div>
                              <h2>Details of: {service.name}</h2>
                              <h3>This cart Details store: {serviceId}</h3>
                             
                    </div>
          );
};

export default Cart;