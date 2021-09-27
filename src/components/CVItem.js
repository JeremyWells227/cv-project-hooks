

import React from 'react'
import InputField from './InputField';


const CVItem = (props) => { 

		let {position, organization, city, from, to, description} = props.data
	return (
		<div className="cvitem">

				<InputField label="Position"  editable={props.editable} value={position}/>  
				<InputField label="Company or School"  editable={props.editable} value={organization} />  
				<InputField label="City"  editable={props.editable} value={city} />  
				<InputField className="from" label="From"  editable={props.editable} value={from} />  
				<InputField className="to" label="To"  editable={props.editable} value={to}/>  
				<InputField className="field description" label="Description"  editable={props.editable} value={description} />  
				<button type="button" onClick={props.deleteItem}>Delete</button>
		</div>
	)
} 

export default CVItem;
