import React, { useState } from 'react';
function Register() {
  const [formData, setFormData] = useState({ name: '', mail: '',phone:'',password:'',state:'' });
  const [response, setResponse] = useState(null);
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
  };

  return (
    <div>
   
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
       
        <label>
          Mail:
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone No.:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button  type="submit">login</button>
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

export default Register;
