import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Items from "./Items";

function App() {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState(1);
  
  function add() {
    var name = "Item " + key;  // Item 1, Item 2, ...
    setKey(key+1);  // Obtaining the next key associated with the list item
    items.push({name, key});
    setItems([...items]);
    console.log(items);
  }
  
  return (
    <>
      <button onClick={add}>Add Item</button>
      <Items items={items} setItems={setItems} />
    </>
  );
}

export default App;