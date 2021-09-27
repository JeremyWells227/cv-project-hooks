import React, {useState, useEffect} from 'react';


const InputField = (props) => { 
	const [text,setText] = useState("") ;


	const handleChange = (e) => { 
		e.preventDefault()
		if(props.editable){
			setText(e.target.value)
		} 
	}

	
	return (
		<input onChange={handleChange} placeholder={props.label} readOnly={!props.editable} value={text} className={props.className}/> 
	) 
}

export default InputField;
