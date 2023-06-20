import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-list-container">
      <div className="heading">
        <h1>TODOLIST</h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
