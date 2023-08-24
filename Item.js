import { useState, useEffect, useRef } from "react";

function Item({name, index, setItems}) {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);
  const refInput = useRef();

  useEffect(function() {
    // If the input field exists, give it focus
    if (refInput.current) refInput.current.focus();
  });
  
  function remove() {
    setItems(function(items) {
      items = items.filter(function(item) {
        // Removal of the item where index = item.key
        if (index == item.key) return false;  // Remove
        else return true;  // Keep
      });
      console.log(items);
      return [...items];
    });
  }
  
  function modify() {
    setModifyOn(!modifyOn);
  }
  
  function change(event) {
    // console.log(event.target.value);
    setText(event.target.value);
  }
  
  function blur(event) {
    // Remove the input field 
    setModifyOn(false);
    // Modify the item in items variable
    setItems(function(items) {
      items = items.map(function(item) {
        // Modification of the item where index = item.key
        if (index == item.key) item.name = event.target.value;
        return item;
      });
      return [...items];
    });
  }
  
  return (
    <li style={{marginTop:"5px"}}>
      { modifyOn ? 
          <input type="text" value={text} onChange={change} onBlur={blur} ref={refInput} /> : 
          <span>{text}</span>
      }
      &nbsp;
      <button onClick={modify}>Modify</button>
      &nbsp;
      <button onClick={remove}>Remove</button>
    </li>
  );
}

export default Item;