import React, { useState } from "react";
import "./app.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChangeHandler = (event) => {
    setInputVal(event.target.value);
  };

  const addToDos = () => {
    setToDoList((preNotes) => {
      return [...preNotes, inputVal];
    });

    setInputVal("");
  };

  const removeToDos = (id) =>{

    console.log(id)

    setToDoList((preNotes) => {
      return preNotes.filter((arrElem, index) => {
        return index !== id;
      });
    });

    

}

  return (
    <>
      <div className="main_Div">
        <div className="sub_Div">
          <br />
          <h1>ToDo App</h1>
          <br />
          <div className="inputForm">
            <input
              type="text"
              placeholder="Type Here"
              value={inputVal}
              onChange={onChangeHandler}
              className="writeArea"
            />
            <input
              type="submit"
              value="+"
              onClick={addToDos}
              className="submitButton"
            />
          </div>
          <br />
          <br />

          <div className="listIems">
            {toDoList.map((item, index) => {
              return <ToDoList key={index} id={index} text={item} onSelectss = {removeToDos} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
