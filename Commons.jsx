import React from "react";
import web from "../src/images/55164fa0904d77acaed2fdc11d04ca50.jpg";
import { NavLink } from "react-router-dom";

const Commons = (props) =>{
    return(
        <>
        <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                   <h1>{props.name} 
                    <strong className="brand-name"> DaminiTechnical</strong></h1>
                    <h2 className="my-3">
                        We are the team of talented developer making websites
                    </h2>
                    <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">
                        {props.btname}
                        </NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 heder-img">
                    <img src={props.imgsrc} ClassName="header-img animated bg-image " alt="home img" width={800}/>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        
        </>
    );
};

export default Commons;