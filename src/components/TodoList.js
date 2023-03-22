import React from "react";
import "./Todolist.css";
import { Link } from "react-router-dom";
import TaskListItem from "./TaskListItem";

const TodoList = (props) => {
  console.log(props);
  const deleteTaskHandler = (id) => {
    props.getTaskId(id);
  };

  //we will map the tasks list that we are accessing through props
  const renderTasksList = props.tasks.map((task) => {
    return (
      <TaskListItem
        task={task}
        clickHandler={deleteTaskHandler}
        key={task.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        TODO list
        <Link to="/add">
          <button
            className="ui button right green"
            style={{ marginLeft: "80%" }}
            onClick={() => {
              window.location.href = "/add";
            }}
          >
            Add Things to do
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderTasksList}</div>
    </div>
  );
};

export default TodoList;
