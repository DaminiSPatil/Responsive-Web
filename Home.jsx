import React from "react";
import web from "../src/images/2832fb71252497.5bbeed275ae64.gif";
import { NavLink } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>Grow your business with 
                    <strong className="brand-name"> DaminiTechnical</strong></h1>
                    <h2 className="my-3">
                        We are the team of talented developer making websites
                    </h2>
                    <div className="mt-3">
                        <NavLink to="/Service" className="btn-get-started">Get Started</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 heder-img">
                    <img src={web} ClassName="header-img animated bg-image " alt="home img" width={500}/>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        </>
    );
};

export default Home;