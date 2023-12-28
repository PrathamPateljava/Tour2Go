import React,{ useState } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
import "./cs.css"
import { useNavigate} from 'react-router-dom'
function Login1() {
    const [formData1, setFormData1] = useState({ mail1: '', password1: '' });
  const [response1, setResponse1] = useState(null);
  const [error,seterror] = useState(false);
  const [error1,seterror1] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData1((prevFormData1) => ({ ...prevFormData1, [name]: value }));
  };


  const navigate=useNavigate();
  function forget(){
   navigate("/fpassword")
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData1.mail1.length === 0) {
      seterror(true);
      return;
    } else {
      seterror(false);
      if(formData1.password1.length === 0) {
        seterror1(true);
        return;
      } else {
        seterror1(false);
        fetch('http://localhost:5000/login/login1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData1)
        })
        .then((response1) => response1.json())
        .then((data) => setResponse1(data))
        .catch((error) => console.error(error));
        if (response1.success) {
          const data=response1.t
          
          // window.localStorage.setItem("token",response1.token)
          // window.localStorage.setItem("loggedin",true)
          navigate('/login1/home',{state: { data }});
          // window.localStorage.setItem("token",response1.token)
          // window.localStorage.setItem("loggedin",true)
          
      }      
      }
    }
  };
  // function forget1(){
  //   navigate('/login1/home',{state: { data }});
    
  // }

  return (
//     <div>
//        <MDBContainer className="my-5 gradient-form">

// <MDBRow>

//   <MDBCol col='6' className="mb-5">
//     <div className="d-flex flex-column ms-5">

//       <div className="text-center">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//           style={{width: '185px'}} alt="logo" />
//         <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
//       </div>

//       <p>Please login to your account</p>
// <form onSubmit={handleSubmit}>

//       <MDBInput wrapperClass='mb-4' label='Email address' name='mail' type='email' value={formData1.mail} onChange={handleInputChange}/>
//       {error?
//          <label>mail can't be empty</label>:""}
//       <MDBInput wrapperClass='mb-4' label='Password' name='password' type='password' value={formData1.password} onChange={handleInputChange}/>
//       {error1?
//        <label>password can't be empty</label>:""}
// </form>

//       <div className="text-center pt-1 mb-5 pb-1">
//         <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>log in</MDBBtn>
//         <a className="text-muted" href="#!">Forgot password?</a>
//       </div>

//       <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
//         <p className="mb-0">Don't have an account?</p>
//         <MDBBtn outline className='mx-2' color='danger'>
//           Danger
//         </MDBBtn>
//       </div>

//     </div>

//   </MDBCol>

//   <MDBCol col='6' className="mb-5">
//     <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//       <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//         <h4 class="mb-4">We are more than just a company</h4>
//         <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//       </div>

//     </div>

//   </MDBCol>

// </MDBRow>

// </MDBContainer>
//     </div>

    <div className='content'>
      <form onSubmit={handleSubmit}>
      <table  align='center'>
        <tr><h1>LOGIN</h1></tr>
      </table>
      <table border={2} align='center'>
        <tr>
          <td><label>
          Mail:
          
          </label></td>
          <td><input
            type="email"
            name="mail1"
            value={formData1.mail1}
            onChange={handleInputChange}
          /></td>
        </tr>
        <tr>
          <td></td>
          <td>{error?
        <label>mail can't be empty</label>:""}
        <br />
        </td>
        </tr>
        <tr>
          <td><label>
          password:
        </label>
        </td>
          <td>  <input
            type="password"
            name="password1"
            value={formData1.password1}
            onChange={handleInputChange}
          />
        </td>
        </tr>
        <tr>
          <td></td>
          <td>{error1?
        <label>password can't be empty</label>:""}
        <br />
        </td>
        </tr>
        <tr>
          <td><button type="submit" id='submitlog'>Submit</button>
        </td>
          <td><button onClick={forget} id='forgetlog'>forget passsword</button>
        </td>
        </tr>
      </table>
      
        {/* <button onClick={forget1} id='forgetlog1'>Home</button> */}
        
      </form>
      {response1 && (
        <div>
          <h2>Server Response:</h2>
          <p>{response1.message}</p>
        </div>
      )}
    </div>
  )
}

export default Login1




















// function App() {
//   return (
//     <MDBContainer className="my-5 gradient-form">

//       <MDBRow>

//         <MDBCol col='6' className="mb-5">
//           <div className="d-flex flex-column ms-5">

//             <div className="text-center">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                 style={{width: '185px'}} alt="logo" />
//               <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
//             </div>

//             <p>Please login to your account</p>


//             <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//             <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


//             <div className="text-center pt-1 mb-5 pb-1">
//               <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
//               <a className="text-muted" href="#!">Forgot password?</a>
//             </div>

//             <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
//               <p className="mb-0">Don't have an account?</p>
//               <MDBBtn outline className='mx-2' color='danger'>
//                 Danger
//               </MDBBtn>
//             </div>

//           </div>

//         </MDBCol>

//         <MDBCol col='6' className="mb-5">
//           <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//             <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//               <h4 class="mb-4">We are more than just a company</h4>
//               <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>

//           </div>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default App;