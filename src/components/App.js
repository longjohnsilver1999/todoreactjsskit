import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
function App() {
  // //we will use props to pass these tasks
  // //remove static and use useState hooks
  // const tasks = [
  //   {
  //     id: "1",
  //     name: "Do Homework",
  //   },
  //   {
  //     id: "2",
  //     name: "sleep 20 hours",
  //   },
  // ];

  //passing fuction as a prop
  const [tasks, setTasks] = useState([]); //initially tasks will be an empty array
  const addTaskHandler = (task) => {
    console.log(task);
    setTasks([...tasks, task]); //add new task
  };
  return (
    <div className="ui container">
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
