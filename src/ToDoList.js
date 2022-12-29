import React from 'react'

function ToDoList(props) {



  return (
        <>
        <div className="liItems">
      <li><input type="reset" value="X"  className = "deleteButton" onClick={() => {props.onSelectss(props.id)}}/>{props.text}</li> 
      </div>
      </>
  )
}

export default ToDoList
