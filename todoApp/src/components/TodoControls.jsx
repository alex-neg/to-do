import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

const TodoControls = () => {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("All");

  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    const textInput = inputRef.current.value;
    if (!textInput.trim()) return;
    const newItem = { id: Date.now(), text: textInput, isComplete: false };
    setTodos((previous) => {
      return [...previous, newItem];
    });
    inputRef.current.value = "";
    console.log(newItem);
  };

  const deleteItem = (id) => {
    setTodos((previous) => {
      return previous.filter((todo) => todo.id !== id);
    });
    console.log("Deleted:", id);
  };

  const toggleComplete = (id) => {
    setTodos((previous) => {
      console.log("previous", previous);
      return previous.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    });
  };

  const filterItems = (filterType) => {
    return todos.filter((todo) => {
      if (filterType === "All") return true;
      if (filterType === "Complete") return todo.isComplete;
      if (filterType === "Incomplete") return !todo.isComplete;
    });
  };

  return (
    <div className="flex flex-col bg-gray-400 place-self-center w-11/12 max-w-md min-h-[550px] p-8 rounded-xl">
      {/* Title */}
      <div className="flex items-center mt-8 gap-2">
        <h1 className="text-3xl font-bold">To-do List</h1>
      </div>
      {/* Form with input, Add btn, Filter btns */}
      <div>
        <form onSubmit={addItem}>
          <div className="flex items-center bg-white rounded-full">
            <input
              ref={inputRef}
              className="bg-transparent text-slate-600 flex-1"
              type="text"
              placeholder="Add to-do"
            />
            <button className="bg-orange-700" type="submit">
              Add
            </button>
          </div>
          <div className="flex justify-center gap-6">
            <button>All</button>
            <button>Complete</button>
            <button>Incomplete</button>
          </div>
        </form>
      </div>

      {/* Render items */}

      {todos.map((item, index) => {
        console.log("Item:", item);

        if (!item) {
          console.warn("Undefined item at index:", index);
          return null;
        }

        return (
          <TodoList
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteItem={deleteItem}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoControls;
