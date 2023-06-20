import React, { useState } from "react";

function TodoForm(props) {
  const [input, setinput] = useState("");

  function handleChange(event) {
    setinput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 1000000),
      text: input,
      isComplete: false,
    });
    setinput("");
  }
  return (
    <form className="todo-form">
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={handleChange}
        name="text"
        placeholder="Add To-Do list"
      ></input>
      <button
        onClick={handleSubmit}
        type="submit"
        className="todo-btn center-corner"
      >
        ADD TODO
      </button>
    </form>
  );
}

export default TodoForm;
