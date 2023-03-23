import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/tasks";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import TaskDetail from "./TaskDetail";
import EditTask from "./EditTask";
import { ReactPropTypes } from "react";
import tasks from "../api/tasks";
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
  const retrieveTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
  };

  const addTaskHandler = async (task) => {
    console.log(task);
    const request = {
      id: uuid(),
      ...task,
    };

    const response = await api.post("/tasks", request);
    console.log(response);
    setTasks([...tasks, response.data]); //add new task
  };

  const updateTaskHandler = async (task) => {
    const response = await api.put(`/tasks/${task.id}`, task);
    console.log(response.data);
    const { id, name } = response.data;
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...response.data } : task;
      })
    );
  };
  //handler to remove task
  const removeTaskHandler = async (id) => {
    await api.delete(`/tasks/${id}`);
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
  };
  //to grab info from local storage n display another hook
  useEffect(() => {
    // const bringTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(bringTasks);
    // if (bringTasks) setTasks(bringTasks);instead of ls use axios
    const getAllTasks = async () => {
      const allTasks = await retrieveTasks();
      if (allTasks) setTasks(allTasks);
    };
    getAllTasks();
  }, []);

  //adding to local storage
  useEffect(() => {
    // if (tasks.length > 0) {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    // }
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

          <Route
            path="/edit"
            render={(props) => (
              <EditTask {...props} updateTaskHandler={updateTaskHandler} />
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
