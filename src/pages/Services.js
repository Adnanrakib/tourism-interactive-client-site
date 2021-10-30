import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('/servicedata.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className="container m-5">
            {/* <h2>Home:{child.length}</h2> */}
            <div className="home">
                <div className="row">
                    {service?.map((childsSingle) => (
                       
                        <div className="col-lg-3 col-sm-12">
                            <div >
                                <div  >
                                    <img className="w-100" src={childsSingle.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>{childsSingle.title}</h4>
                                    <p> {childsSingle.desc}</p>
                                    <h3>{childsSingle.price}</h3>
                                    <Link to="/login">
                                        <button className="btn btn-secondary">Booking Now</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;