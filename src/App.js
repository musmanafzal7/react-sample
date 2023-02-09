import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputBox from "./components/InputBox";
import MessageItem from "./components/MessageBox";

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>Message List{items}</h1>
        {/* <button className="" onClick={() => setItems((prev) => prev + 1)}>
          Click
        </button> */}
      </div>
      <InputBox onAdd={addItems}></InputBox>
      <div>
        <ul>
          {items.map((item, index) => (
            <MessageItem key={index} id={index} text={item} onChecked={deleteItem} />
          ))}          
        </ul>
      </div>
    </div>
  );
}

export default App;
