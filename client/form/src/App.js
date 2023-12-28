import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./cs.css"
function App() {
  const [formData, setFormData] = useState({ name: '', mail: '', phone: '', password: '', state: '' });
  const [response, setResponse] = useState(null);
  const [error, seterror] = useState(false);
  const [error1, seterror1] = useState(false);
  const [error2, seterror2] = useState(false);
  const [error3, seterror3] = useState(false);
  const [error4, seterror4] = useState(false);

  const navigate = useNavigate();
  function clickme() {
    navigate("/login1")
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name.length === 0) {
      seterror(true)
    }
    else {
      seterror(false)
      if (formData.mail.length === 0) {
        seterror1(true)
      }
      else {
        seterror1(false)
        if (formData.phone.length === 0) {
          seterror2(true)
        }
        else {
          seterror2(false)
          if (formData.password.length === 0) {
            seterror3(true)
          }
          else {
            seterror3(false)
            if (formData.state.length === 0) {
              seterror4(true)
            }
            else {
              seterror4(false)
              fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              })
                .then((response) => response.json())
                .then((data) => setResponse(data))
                .catch((error) => console.error(error));
            }
          }
        }
      }
    }

  };

  return (
    <div className='content'>

      <form onSubmit={handleSubmit}>
      <table align='center' >
      <tr align='center' ><td><h1>REGISTER</h1></td></tr>
          
      </table>
      
        <table align='center' border={2} >
        
          <tr>
            <td> 
            <label>
              Username:
            </label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

            </td>
          </tr>

          <tr>
            <td></td>
            <td>{error ?
              <label>cant be empty</label> : ""}
              <br /></td>
          </tr>
          <tr>
            <td> <label>
              Mail:

            </label></td>
            <td><input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleInputChange}
            /></td>
          </tr>
          <tr>
            <td></td>
            <td>
              {error1 ?
                <label>cant be empty</label> : ""}
              <br /></td>
          </tr>
          <tr>
            <td><label>
              Phone No.:
            </label>
            </td>
            <td>  <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>{error2 ?
              <label>cant be empty</label> : ""}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>{error3 ?
              <label>cant be empty</label> : ""}
              <br />
            </td>
          </tr>
          <tr>
            <td><label>
              State:
            </label>
            </td>
            <td>  <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
            </td>
          </tr>
          <tr>
            <td></td>
            <td> {error4 ?
              <label>cant be empty</label> : ""}
              <br />
            </td>
          </tr>
          <tr>
            <td> <button type="submit" id='submitreg'>Submit</button>
            </td>
            <td> <button onClick={clickme} id='loginreg'>login</button>
            </td>
          </tr>

        </table>
      </form>

      {response && (
        <div>
          <h2>Server Response:</h2>
          <p>{response.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
