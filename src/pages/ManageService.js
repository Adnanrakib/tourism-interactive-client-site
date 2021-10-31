import React, { useState, useEffect } from 'react';

const ManageService = () => {
          const [services, setSevices] = useState()
          useEffect( () =>{
                    fetch('http://localhost:3000/services')
                    .then(res =>res.json())
                    .then(data => setSevices(data))
          }, []);
          const handleDelete = id =>{
                    const url = `http://localhost:3000/services${id}`;
                    fetch (url, {
                              method: 'Delete'
                    })
                    .then(res => res.json ())
                    .then(data =>{
                              console.log(data);
                              if(data.deletedCount){
                                        alert('are you sure delete?')
                                        const remaining = services.filter(service => services._id !==id);
                                        setSevices(remaining);
                              }
                    })
          }

          return (
                    <div>
                              <h1>Manage Service</h1>
                              {
                                        services.map(service => <div key={service._id}
                                        >
                                                  <h3>{service.name}</h3>
                                                  <button onClick={() => handleDelete(service.id)} >Delete</button>
                                        </div> )
                              }
                    </div>
          );
};

export default ManageService;