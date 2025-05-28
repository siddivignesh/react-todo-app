import React, { useState } from "react";

function ToDoItem({ todoval, index, delToDo, editToDo }) {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <div className="todo-item">
        <span>{index}.</span>
        <span className={`${isCheck ? "marked" : ""} todo-text`}>
          {todoval}
        </span>
        <div className="todo-btns">
          <input
            onChange={() => setIsCheck(!isCheck)}
            title="marked as done"
            type="checkbox"
            name="checkbox"
            className="checkbox"
          />
          <span title="click to edit">
            <i onClick={editToDo} className="fa-solid fa-pencil"></i>
          </span>
          <span title="click to delete">
            <i onClick={delToDo} className="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;