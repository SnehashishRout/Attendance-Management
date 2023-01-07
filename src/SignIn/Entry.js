import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import StudTable from '../Table/StudTable';

export default function Entry({upStud, updateRec, isValida}) {

    const [name, setname] = useState("");
    const [key, setKey] = useState("");
    const [chk, setChk] = useState(false);
    const [chkOut, setChkOut] = useState(false);

    const navigate = useNavigate();
          
 function upName(event)
 {
    setname(event.target.value);
    // console.log(name);
    
 }

 function upKey(event)
 {
    setKey(event.target.value);
    // console.log(key);
 }

 function upChk(event)
 {
  setChk(event.target.checked);
  
 }

 function upChkOut(event)
 {
  setChkOut(event.target.checked);
  
  
 }

 function sendSubmit(event)
 {
    // console.log("name :" + name);
    // console.log("Password :" + key);

    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    
        console.log(showTime);
      
    let currInfo = {
      name : name,
      roll: key,
      chkIn: chk,
      chkOut: chkOut,
      inTime: "--",
      outTime: "--"
    }

    if(chk && !chkOut)
      currInfo['inTime'] = showTime;
    
    else if(!chk && chkOut)
      currInfo['outTime'] = showTime;
    
    else
    {
      alert("Please Select Either CheckIn or CheckOut to Continue !!");

      event.preventDefault();
      return;
    }
    
    // if(isValida(currInfo) === false)
    // {
    //   console.log("IN VALID!!");
    //   return;
    // }
    
    
  
      upStud(currInfo);
      
      navigate("/success");
    
    
    // isValida(currInfo);
    

    event.preventDefault();
 }

 function getLogs()
 {
    // updateRec();
  //  navigate('/allInfo');
   const arr = updateRec();
   
   console.log("the 1st Type is: " + typeof(arr));

   navigate("/allInfo", {
    state:{
      inf: arr
    }
   })
 }

  return (
    <div class="entry">
      
    <form action="">
        
        <div class="headingsContainer">
            <h3>Attendance Management</h3>
            <p>Please Enter your Name and Roll-Number</p>
        </div>

        
        <div class="mainContainer">
            
            <label for="username">Student Name</label>
            <input type="text" placeholder="Enter Name" name="name" required onChange={upName}/>

            <br></br>

            
            <label for="pswrd">Roll Number</label>
            <input type="text" placeholder="Enter Roll Number" name="roll" required onChange={upKey}/>

            
            <div class="subcontainer">
                <label>
                  <input type="checkbox"  name="remember" onChange={upChk}/> Check In
                </label>
                <label>
                  <input type="checkbox"  name="remember" onChange={upChkOut}/> Check Out
                </label>
            </div>


           
            <button type="submit" class="entrySubmit" onClick={sendSubmit}>Submit</button>

            
            <button type="button" class="btn btn-primary" onClick={getLogs}>Check Log History</button>

        </div>

    </form>
    </div>
  )
}
