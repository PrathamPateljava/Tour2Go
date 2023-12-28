import React from 'react'
import './cs.css'

function Footer() {

    const tstyle = {
        height: "5%",
        padding:"0.2% 6% ",
        fontSize:"90%"
    };
    return (
        <div className="footer" style={tstyle}>
         <a >Contact Us</a>
         <a style={{padding:"0% 2%"}}>About Us</a>

        </div>

    );
}

export default Footer
