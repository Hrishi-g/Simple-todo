import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function handleArray(e) {
    const len = text.length;
    if (len !== 0) {
      setArray([...array, text]);
      setText("");
    } else {
      console.log("hello");
    }
  }
  
  return (
    <>
      <div className="main">
        <div className="name">ToDo</div>
        <div className="container">
          <div className="head">
            <input
              type="text"
              value={text}
              placeholder="Enter Text"
              onChange={handleChange}
            />
            <button className="add_btn" onClick={handleArray}>
              Add
            </button>
          </div>
          <div className="display">
            {array.map((item, index) => {
              return (
                <div key={index} className="items">
                  <div className="item_list">{item}</div>
                  <button
                    className="del_btn"
                    onClick={(index) => {
                      array.pop(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
