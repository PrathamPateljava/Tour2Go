import React from 'react'
import {useHistory} from "react-router-dom"

function Pra() {
const history=useHistory();
function a(){
 
    history.push("/login/login1")
}
    return (
    <div>
    <button onClick={a}></button>  
    </div>
  )
}

export default Pra
