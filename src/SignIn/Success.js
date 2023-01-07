import React from 'react'
import { useNavigate } from 'react-router'
import "./success.css"

export default function Success() {

    const navigate = useNavigate();

    function handleClick()
    {
        navigate("/");
    }
  return (
    <div class="succ">
        <div class="card">
        <div style={ {borderRadius: "200px", height: "200px", width: "200px", background: "#F8FAF5", margin: "0 auto"} }>
            <i class="checkmark">✓</i>
        </div>
            <h1 id="suc-tag">Success</h1> 
            <p class="succ-para">Your Response has been recorded<br/></p>
            <button class="btn btn-warning btn-lg" onClick={handleClick}>Go Back</button>
        </div>
        
    </div>
  )
}
