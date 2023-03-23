// creating class component
import React from "react";
import { PropTypes } from "react";
import tasks from "../api/tasks";
//create state to use in hooks to add task
class EditTask extends React.Component {
  constructor(props) {
    super(props);
    const { id, task } = props.location.state.task;
    this.state = {
      id,
      task,
    };
    //  this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.task === "") {
      alert("please enter task");
      return;
    }
    this.props.updateTaskHandler(this.state);
    //state contains task
    //this.props.history.push("/");
    window.location.href = "/";
  };
  //we need to pass this object to app component. we will use props to pass data from child to parent
  render() {
    return (
      <div className="ui main">
        <h2 className="heading">Edit Task</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Task</label>
            <input
              type="text"
              name="task"
              placeholder="Task"
              value={this.state.task}
              onChange={(e) => this.setState({ task: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditTask;
