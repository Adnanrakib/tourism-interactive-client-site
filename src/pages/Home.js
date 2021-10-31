import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner';


const Home = () => {
    const [child, setChild] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setChild(data))
    }, [])
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
            <div className="container m-5">
            {/* <h2>Home:{child.length}</h2> */}
            <div className="home">
                <div className="row">
                    {child?.map((childs) => (
                       
                        <div className="col-lg-4 col-sm-12">
                            <div  >
                                <div >
                                    <img className="w-100" src={childs.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h3>{childs.name}</h3>
                                    <h6>{childs.desc}</h6>
                                    <h4>{childs.price}</h4>
                                   
                                    <Link to="/login">
                                        <button className="btn btn-dark">Booking Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Home;