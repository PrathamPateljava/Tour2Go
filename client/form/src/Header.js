import React from 'react'
import './cs.css'
import imaget from "./images/1234.jpg"
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate=useNavigate();
function cart(){
    const data=props.title
    navigate('/home/cart',{state:{data}})
}
function logout() {
    window.localStorage.clear();
    window.location.href="/";
  }
  function Order() {
    const data=props.title
    navigate('/home/order',{state:{data}})
  }

function home(){
    const data=props.title
    navigate('/login1/home',{state:{data}})
}
    const mstyle = {
        backgroundColor: "black"
    }
    const imgstyle={
        width:"100%",
        height:"8%"
    }
    const nstyle={
        padding:"0%",
        navcolor:"white",
        
    }

    return (
        <React.Fragment>
            <div className='header'>
                <div>
            <img src={imaget} style={imgstyle} />

            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-sucess" style={nstyle}>

                <div className="container-fluid" style={mstyle}>
                    <a className="navbar-brand" href="#" style={{ color: "Green",fontFamily:"fantasy" }}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={mstyle}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{padding:"0% 2%"}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={home} style={{ color: "white" }} >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={home} style={{ color: "white" }}>Packages</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="history" style={{ color: "white" }}>History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={cart} id='td' style={{ color: "white" }}>My cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="custom" style={{ color: "white" }}>Customizaton</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={Order} style={{ color: "white" }}>Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={logout} style={{ color: "white" }}>Logout</a>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
            </div>
        </React.Fragment>
    );
}
export default Header;


