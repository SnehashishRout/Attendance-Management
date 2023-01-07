import React, { useState } from 'react'
import { useLocation } from 'react-router';
import Row from './Row';

export default function StudTable({rec}) {

	const location = useLocation();
	console.log("Location = " + location);
	console.log("The Type is =" + typeof(location.state.inf));
	const ls = location.state.inf;
	// const [count, setCount] = useState();
	let count = 0;
	
		var x = 0; var y = 0;
		ls.map((stud) => {
			if(stud['chkIn'] == true)
				x = x+1;
			else
				y = y+1;
		})

		count= Math.max(x-y, 0) ;
	
	
	return (
		<div>
            <div style={{textAlign:"center", padding:"5vh", fontSize:"150%", fontWeight:"bold"}}>Register History</div>
			<div style={{textAlign:"center", padding:"1% 0", backgroundColor:"#ADE2F7", fontWeight:"bold", marginBottom:"1%"}}>No. of Students Present : {count}</div>
			<table>
				
				<thead>
					<tr>
						<th scope="col">Roll No.</th>
						<th scope="col">Name</th>
						<th scope="col">CheckIn Time</th>
						<th scope="col">CheckOut Time</th>
					</tr>
				</thead>
				<tbody>
				
					{
						ls.map((student) => {
							return(<Row roll= {student['roll']} name={student['name']} checkIn={student['inTime']} checkOut={student['outTime']}/>)
						})
					}
				</tbody>
			</table>
		</div>
	);
}
