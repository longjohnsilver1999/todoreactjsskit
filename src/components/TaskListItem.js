import React from "react";
import iconbook from "../images/iconbook.png";
//import TodoList from "./TodoList";
const TaskListItem = (props) => {
  const { id, task } = props.task;

  return (
    <div className="item">
      <img className="ui avatar image" src={iconbook} alt="bookicon" />
      <div className="content">
        <div className="header">{task}</div>
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
