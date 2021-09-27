import React, { useState, useEffect } from "react";
import InputField from "./InputField.js";
import List from './List';
const Form = (props) => {
  const [editable, setEditable] = useState(true);

  let fields = [
    { key: "Name", label: "Name", editable: editable },
    { key: "Email", label: "Email", editable: editable },
    { key: "Phone", label: "Phone", editable: editable },
  ].map((item) => {
    return <InputField {...item} />;
  });

  return (
    <div className="formContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEditable(!editable);
          return false;
        }}
      >
        <div className="contact">{fields}</div>
				<div className="education">
					<h2> Education </h2> 
					<List listName="education" editable={editable} /> 
				</div>
				<div className="Work History">
					<h2> Work History </h2> 
					<List listName="Work History" editable={editable} /> 
				</div>

        <div className="buttonrow">
          <button type="submit">{editable ? "Save" : "Edit"} </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
