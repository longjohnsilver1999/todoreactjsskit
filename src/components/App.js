import React from "react";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
function App() {
  return (
    <div>
      <Header />
      <AddTask />
      {/*<TodoList /> */}
    </div>
  );
}

export default App;
