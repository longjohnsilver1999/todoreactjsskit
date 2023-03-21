import React from "react";
import TaskListItem from "./TaskListItem";

const TodoList = (props) => {
  console.log(props);
  //we will map the tasks list that we are accessing through props
  const renderTasksList = props.tasks.map((task) => {
    return <TaskListItem task={task} />;
  });

  return <div className="ui celled list">{renderTasksList}</div>;
};

export default TodoList;
