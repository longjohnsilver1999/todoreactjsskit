import React from "react";
import iconbook from "../images/iconbook.png";

const TaskListItem = (props) => {
  const { task } = props.task;
  return (
    <div className="item">
      <img className="ui avatar image" src={iconbook} alt="bookicon" />
      <div className="content">
        <div className="header">{task}</div>
      </div>
      <i
        className="fa-solid fa-pencil"
        style={{ color: "blue", marginLeft: "90%", marginBottom: "20px" }}
      ></i>
    </div>
  );
};

export default TaskListItem;
