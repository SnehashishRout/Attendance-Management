import logo from './logo.svg';
import './App.css';
import Entry from './SignIn/Entry';
import { useState } from 'react';
import Success from './SignIn/Success';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import StudTable from './Table/StudTable';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';


function App() {

  const [stud, setStud] = useState();
  var list = [];
  const [inf, setInf] = useState([]);
  
  // const navigate = useNavigate();

  function upStud(info)
  {
    let isValid = true;

    if(info['chkIn'])
    {
      list.map((ele) =>{
        if(ele['roll'] === info['roll'])
        {
          alert("Current Roll Number Has already CheckedIn !!!");
          isValid = false;

        }

        
      })
    }

    else 
    {
      let found = false;

      list.map((ele) =>{
        if(ele['roll'] === info['roll'])
        {
          // alert("No such Student Entry present !!! Check In first");
          found = true;
          
        }
      })

      if(found)
        isValid = true;
      else
      {
        isValid = false;
        alert("No such Student Entry present !!! Check In first");
      }
    }
    

    // setStud(info);
    // console.log(info);
    if(isValid)
    {
      list.push(info);

    }
    

    // console.log(list);
    // event.preventDefault();
  }

  // function isValida(obj)
  // {
  //   if(obj['chkIn'])
  //   {
  //     list.map((ele) =>{
  //       if(ele['roll'] === obj['roll'])
  //       {
  //         alert("Current Roll Number Has already CheckedIn !!!");
          
      
  //       }

  //       else
  //       {
  //         upStud(obj);
  //         // navigate("/success");
  //       }
  //     })
  //   }

  //   else 
  //   {
  //     list.map((ele) =>{
  //       if(ele['roll'] !== obj['roll'])
  //       {
  //         alert("No such Student Entry present !!! Check In first");
  //         valid = false;
  //         return;
          
  //       }
  //     })
  //   }
    
  // }

  function updateRec()
  {
     
    // setInf(list);
    // console.log("The Inf = " + inf);
    return list;
    
  }

  return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route>
						<Route exact path="/" element={<Entry upStud={upStud} updateRec={updateRec} />} />
						<Route exact path="/success" element={<Success />} />
            <Route exact path="/allInfo" element={<StudTable rec = {inf} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}


export default App;
