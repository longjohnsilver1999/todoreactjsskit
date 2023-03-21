import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
function App() {
  const LOCAL_STORAGE_KEY = "tasks";
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
  // ]; id: uuid(),

  //passing fuction as a prop
  //to add localstorage useeffect hook
  const [tasks, setTasks] = useState([]); //initially tasks will be an empty array
  const addTaskHandler = (task) => {
    console.log(task);
    setTasks([...tasks, { id: uuid(), ...task }]); //add new task
  };
  //handler to remove task
  const removeTaskHandler = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
  };
  //to grab info from local storage n display another hook
  useEffect(() => {
    const bringTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(bringTasks);
    if (bringTasks) setTasks(bringTasks);
  }, []);

  //adding to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="ui container">
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TodoList tasks={tasks} getTaskId={removeTaskHandler} />
    </div>
  );
}

export default App;
