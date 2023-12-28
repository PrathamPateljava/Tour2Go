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
import { Card, CardBody, CardTitle } from 'reactstrap';

import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Orders() {
    const location = useLocation();
    const { data } = location.state;
    const [cartItems, setCartItems] = useState([]);
    const [response1, setResponse1] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/login/order/${data}`)
            .then(response => response.json())
            .then(data => setCartItems(data));
    }, [data]);



    function book(pacid, name) {
        const data4 = pacid;
        const data2 = name;
        fetch('http://localhost:5000/login/deleteorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pacid: data4, name: data2 })
        }).then((response1) => response1.json())
            .then((data) => setResponse1(data))
            .catch((error) => console.error(error));
    };


    return (
        <div>
            <Header title={data} />
            <div className='content'>
                <h1>Orders</h1>
                {cartItems.map(item => (

                    <Card >
                        <CardBody>
                            <CardTitle>Package Name: {item.packagename}</CardTitle>
                            <CardTitle>Email ID:{item.mail}</CardTitle>

                            <CardTitle>Date of Booking:{item.date}</CardTitle>
                            <CardTitle>Package Price:{item.price}</CardTitle>
                            <button id='delorder' onClick={() => book(item.pacid, item.name)}>Cancel Order</button>
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

export default Orders;
