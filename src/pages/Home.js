import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [child, setChild] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setChild(data))
    }, [])
    return (
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
                                    <h4>{childs.name}</h4>
                                    <p>{childs.desc}</p>
                                   
                                    <Link to="/services">
                                        <button className="btn btn-dark">Details</button>
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

export default Home;