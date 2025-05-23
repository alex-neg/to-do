import React from "react";

const TodoList = ({ text, id, isComplete, deleteItem, toggleComplete }) => {
  return (
    <div className="flex items-center gap-2 my-3">
      <div
        onClick={() => toggleComplete(id)}
        className={`flex flex-1 items-center cursor-pointer ${
          isComplete ? "bg-[#B2CD9C] rounded-full" : ""
        }`}
      >
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <button onClick={() => deleteItem(id)}>X</button>
    </div>
  );
};

export default TodoList;
