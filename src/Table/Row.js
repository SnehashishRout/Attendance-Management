import React from 'react'

function Row(props) {
	return (
		<tr>
			<td data-label="Roll No.">{props.roll}</td>
			<td data-label="Nmae">{props.name}</td>
			<td data-label="CheckIn Time">{props.checkIn}</td>
			<td data-label="CheckOut Time">{props.checkOut}</td>
		</tr>
	);
}

export default Row