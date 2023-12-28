import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import "./cs.css"
function Otp() {
    const [formData3, setFormData3] = useState({ otp: '', npassword: '', npasswordconfirm: '' ,mail:''});
    const [response1, setResponse1] = useState(null);
    

    const [error, seterror] = useState(false);
    const [error1, seterror1] = useState(false);
    const [error2, seterror2] = useState(false);
    
    const [error5, seterror5] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData3((prevFormData3) => ({ ...prevFormData3, [name]: value }));
        
    };
function bhag(){
    navigate('/login1')
}
    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData3.mail.length === 0)
        {
            seterror5(true)
        }
        else{
            seterror5(false)
        
            if (formData3.otp.length === 0) {
                seterror(true)
            }
            else {
    
                seterror(false)
                if (formData3.npassword.length === 0) {
                    seterror1(true)
                }
                else {
    
                    seterror1(false)
                    if (formData3.npasswordconfirm.length === 0) {
                        seterror2(true)
                    }
                    else {
    
                        seterror2(false)
                        fetch('http://localhost:5000/login/fpassword/otp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData3)
                        })
                            .then((response1) => response1.json())
                            .then((data) => setResponse1(data))
                            .catch((error) => console.error(error));
                        
    
    
                    }
                }
            }
        }


    };

    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
<table align='center'><tr><td><h1>NEW PASSWORD</h1></td></tr></table>
<table align='center' border={2}>
    <tr>
        <td><label>
                    Mail:
                </label>
                </td>
        <td>    <input
                        type="email"
                        name="mail"
                        required
                        value={formData3.mail}
                        onChange={handleInputChange}
                    />
                </td>
    </tr>
    <tr>
        <td></td>
        <td>{error5 ? <label>mail can't be empty</label> : ""}
                <br />
                </td>
    </tr>
    <tr>
        <td>
            
            <label>
                Otp:
            </label>
            </td>
        <td>    <input
                    type="Int"
                    name="otp"
                    value={formData3.otp}
                    onChange={handleInputChange}
                />
            </td>
    </tr>
    <tr>
        <td></td>
        <td>
        {error ?<label>otp can't be empty</label> : ""}
                <br />
        </td>
    </tr>
    <tr>
        <td>
        <label>
                    New Password:
                    
                </label>
        </td>
        <td><input
                        type="password"
                        name="npassword"
                        value={formData3.npassword}
                        onChange={handleInputChange}
                    /></td>
    </tr>
    <tr>
        <td></td>
        <td>{error1 ?
                    <label>new password can't be empty</label> : ""}
                <br />
                </td>
    </tr>
    <tr>
        <td>
        <label>
                    Confirm New Password:
                </label>
                
        </td>
        <td>    <input
                        type="password"
                        name="npasswordconfirm"
                        value={formData3.npasswordconfirm}
                        onChange={handleInputChange}
                    />
                </td>
    </tr>
    <tr>
        <td></td>
        <td>{error2 ?
                    <label>confirm password can't be empty.</label> : ""}
                <br />
                </td>
    </tr>
    <tr>
        <td>
        <button type='submit' id='otpsubmit'>Confirm</button>
                
        </td>
        <td>
        <button onClick={bhag} id='otplogin'>Login</button>
                
        </td>
    </tr>
   
                </table>
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

export default Otp
