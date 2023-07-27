import React from "react";
import web from "../src/images/2832fb71252497.5bbeed275ae64.gif";
import { NavLink } from "react-router-dom";

import Commons from "./Commons";


const About = () =>{
    return(
        <>
          <Commons name="Welcome to About Page" imgsrc={web} visit="/contact"  btname="Contact Now"  />  
        </>
    );
};

export default About;