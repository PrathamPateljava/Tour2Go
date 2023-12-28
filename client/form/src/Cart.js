// import React,{useState ,useEffect} from 'react'
// import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

// import Header from './Header'
// import Footer from './Footer'
// import { useLocation } from 'react-router-dom';
// function Cart() {
//     const location = useLocation();
//     const { data } = location.state;
//     const [response1, setResponse1] = useState(null);
//     const [items, setItems] = useState([]);
    
    
    
//     // function removeItem(event, pacid) {
//     //   event.preventDefault();
//     //   fetch('http://localhost:5000/login/view1', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({ name: data, pacid: pacid })
//     //   })
//     //   .then((response1) => response1.json())
//     //   .then((data) => {
//     //     setResponse1(data);
//     //     if (data.message === 'done') {
//     //       setItems(items.filter((item) => item.data[2] !== pacid));
//     //     }
//     //   })
//     //   .catch((error) => console.error(error));
//     // };
//     useEffect(() => {
//       fetch('http://localhost:5000/login/view',{ body: JSON.stringify({ name: data })})
//       .then(console.log(Response))
//         .then(data => setItems(data.items));
//     }, []);


//   return (
//     <div>
//       <Header title={data}/>
//       <div className='content1'>
      
//       <div>
//       <h1>Cart Items</h1>
//       {items.map((item) => (
//         <Card key={item.pacid}>
//            {console.log("hello")}
//           <CardBody>
//             <CardTitle>{item.packagename}</CardTitle>
//             <CardText>{item.date}</CardText>
//             {/* <button onClick={() => removeItem(item.data[2])}>Remove</button> */}
//           </CardBody>
//         </Card>
//       ))}
//     </div>
//       </div>
//       <Footer/>
//       {response1 && (
//                 <div>
//                     <h2>Server Response:</h2>
//                     <p>{response1.message}</p>
//                 </div>
//             )}
//     </div>
//   )
// }

// export default Cart
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import "./cs.css"

function ViewCart({ }) {
  const location = useLocation();
      const { data } = location.state;
  const [cartItems, setCartItems] = useState([]);
  const [response1,setResponse1]=useState([]);
  
  const [error,seterror]=useState(false);
  const [error1,seterror1]=useState(false);
  const [promo,setpromo]=useState("");
 const navigate=useNavigate();


  useEffect(() => {
    fetch(`http://localhost:5000/login/${data}`)
      .then(response => response.json())
      .then(data => setCartItems(data));
  }, [data]);
function click(){
  if(!error){
    seterror(true)
    seterror1(false)
    setpromo("0.9")
    
  }
  else{
    seterror(false)
    setpromo("")
  }
  
}
function click1(){
  if(!error){
    seterror1(true)
    seterror(false)
    setpromo("0.8")
    
  }
  else{
    seterror1(false)
    setpromo("")
  }
  
}
  function book1(pacid, name) {
    const data4 = pacid;
    const data2 = name;
    fetch('http://localhost:5000/login/deletecart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pacid: data4, name: data2})
    }).then((response1) => response1.json())
        .then((data) => setResponse1(data))
        .catch((error) => console.error(error));
};

  function book(pacid,price,name,date,mail,username){
    const data4=pacid;
    const data1=price;
    const data2=name;
    const data7=date;
    const data3=mail;
    const data10=promo;
    const data=username;
    console.log(data)
    
    console.log(data1)
    
    console.log(data2)
    
       navigate("/home/cart/pay",{state:{data4,data1,data2,data7,data3,data,data10}})
       setpromo("")
  }
  return (
    <div>
      <Header title={data} />
      <div className='content'>
     
      <div  >
      <button className='cardclass' onClick={click} id='promo1'>
      <h1><b>FIRST100</b></h1>
     For first 100 booking
      </button>
      
      <button className='cardclass' onClick={click1} id='promo2'>
      <h1><b>FIRST10</b></h1>
     For first 10 booking
      </button>
      <br>
      </br>
      {error?<label className='tat' style={{ width: '18rem' }} >
        promo code applied</label>:""}
        {error1?<label className='tat' style={{ width: '18rem' }} >
        promo code applied</label>:""}
      
      </div>
        <h1>Cart Items</h1>
        {cartItems.map(item => (
          <Card >
            <CardBody>
              <CardTitle>Package Name: {item.packagename}</CardTitle>
              <CardTitle>Email ID:{item.mail}</CardTitle>

              <CardTitle>Date of Booking:{item.date}</CardTitle>
              <CardTitle>Package Price:{item.price}</CardTitle>
              
              <button id='cartbook' onClick={()=>book(item.pacid,item.price,item.packagename,item.date,item.mail,item.name)}>Make Payment</button>
              <button id='remove' onClick={() => book1(item.pacid, item.name)}>Remove</button>
            </CardBody>
          </Card>
        ))}
      </div>
      <Footer />
      {response1 && (
                <div>
                    <h2>Server Response:</h2>
                    <p>{response1.message}</p>
                </div>
            )}
    </div>
  );
}

export default ViewCart;
