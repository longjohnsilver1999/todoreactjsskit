import React from "react";
import iconbook from "../images/iconbook.png";
import pic from "../images/images.png";
//import TodoList from "./TodoList";
const TaskDetail = (props) => {
  console.log(props);
  const { task } = props.location.state.task;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={pic} alt="pic" />
        </div>
        <div className="content">
          <div className="header">{task}</div>
          <div className="description">To Do</div>
        </div>
      </div>
      <div className="center-div">
        <button
          className="ui button green center"
          onClick={() => {
            window.location.href = `/`;
          }}
        >
          back to home
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
