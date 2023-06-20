import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Adding the todo todo
  function addTask(task) {
    console.log("TASK IS: ", task);
    if (!task.text) {
      return;
    }
    setTodos((preval) => {
      return [...preval, task];
    });
    console.log("The List IS: ", todos);
  }

  // Remove todo from todo
  const removeTask = (id) => {
    let updatedTasks = [...todos].filter((task) => {
      return task.id !== id;
    });
    setTodos(updatedTasks);
  };

  // Task is Completed
  const completedTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(updatedTasks);
  };

  return (
    <div>
      <TodoForm addTask={addTask} />
      <Todo
        todos={todos}
        completedTask={completedTask}
        removeTask={removeTask}
      />
    </div>
  );
}

export default TodoList;
