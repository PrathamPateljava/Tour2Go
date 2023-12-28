import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./cs.css"
function Fpassword() {
    const [formData2, setFormData2] = useState({ mail: '' });
    const [response1, setResponse1] = useState(null);
    const [error, seterror] = useState(false);
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData2((prevFormData2) => ({ ...prevFormData2, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData2.mail.length === 0) {
            seterror(true)
        }
        else {
            seterror(false)
            fetch('http://localhost:5000/login/fpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData2)
            })
                .then((response1) => response1.json())
                .then((data) => setResponse1(data))
                .catch((error) => console.error(error));
            const data = formData2.mail
            navigate("/fpassword/otp", { state: { data } });

        }

    };




    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
                <table  align='center' >Reset Password</table>
                <table border={2} align='center'>
                    <tr>
                        <td><label>
                            Mail:
                        </label>
                        </td>
                        <td>    <input
                            type="email"
                            name="mail"
                            required
                            value={formData2.mail}
                            onChange={handleInputChange}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{error ? <label>mail can't be empty</label> : ""}
                            <br />
                        </td>
                    </tr>
                    


                </table>
                <div align='center'>
                    <button type='submit' id='fpassword'>confirm</button>
                    </div>   
                    
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

export default Fpassword
