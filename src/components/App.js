import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import TaskDetail from "./TaskDetail";
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
    if (tasks.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <TodoList
                {...props}
                tasks={tasks}
                getTaskId={removeTaskHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddTask {...props} addTaskHandler={addTaskHandler} />
            )}
          />

          {/* //adding path */}
          {/* <AddTask addTaskHandler={addTaskHandler} />
        <TodoList tasks={tasks} getTaskId={removeTaskHandler} /> */}
          <Route path="/task/:id" component={TaskDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
