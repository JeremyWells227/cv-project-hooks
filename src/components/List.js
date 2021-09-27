import React, { useState, useEffect } from "react";
import CVItem from "./CVItem" ;
const List = (props) => {
  const [list, setList] = useState([]);
	const [childEditable,setChildEditable] = useState(true);


	const deleteItem = (index) => { 
		let items = [...list];

		items = [...items.slice(0,index),...items.slice(index)]; 
		items.forEach((item,index) => { 
			item.deleteItem = ()=>{deleteItem(index)}
			item.id=`${props.listName}_${index}`
			item.key=`${props.listName}_${index}`
		})
		console.log(index)
		setList(items) 
	} 

	useEffect(()=> {
		setChildEditable(!props.editable);
		const newList = [...list]
		newList.forEach((item) => { 
			item.editable=childEditable
		} )
	},[childEditable,props.editable,list]);

  const addItem = () => {
    let itemNum = list.length;
    let newItem = {
      id: `${props.listName}_${itemNum}`,
      key: `${props.listName}_${itemNum}`,
      editable: childEditable,
      data: {},
      deleteItem: () => {
        deleteItem(itemNum);
      },
    };
    let currList = list;
    let newList = [...currList, newItem];
    newList.forEach((item, index) => {
      item.deleteItem = () => {
        deleteItem(index);
      };
      item.id = `${props.listName}_${index}`;
      item.key = `${props.listName}_${index}`;
    });
    setList(
      newList,
    );
  };
  return (
		<div>
		{list.map((item)=>{
			return <CVItem {...item} /> 
		})}
		<button type="button" onClick={addItem}>Add</button>
		</div>);
};

export default List;
