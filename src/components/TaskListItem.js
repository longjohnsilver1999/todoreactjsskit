import React from "react";
import { Link } from "react-router-dom";
import iconbook from "../images/iconbook.png";

//import TodoList from "./TodoList";
const TaskListItem = (props) => {
  const { id, task } = props.task;

  return (
    <div className="item">
      <img className="ui avatar image" src={iconbook} alt="bookicon" />
      <div className="content">
        <a
          onClick={() => {
            window.location.href = `/task/${id}`;
          }}
        >
          <Link to={{ pathname: `/task/${id}`, state: { task: props.task } }}>
            <div>{task}</div>
          </Link>
        </a>
      </div>

      <i
        className="trash alternate outline icon"
        style={{ color: "blue", marginLeft: "90%", marginTop: "20px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default TaskListItem;
