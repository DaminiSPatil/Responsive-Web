import React from "react";

const Footer = ()=>{
    const year=new Date().getFullYear();
 return(
    <>
        <footer className="w-100 bg-light text-center">
        <p  style={{
            marginBottom:"100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >copyright © {year}</p>
        </footer>
    </>
 )
};
export default Footer;