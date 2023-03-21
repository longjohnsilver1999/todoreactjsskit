// creating class component
import React from "react";
//create state to use in hooks to add task
class AddTask extends React.Component {
  state = {
    task: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.task === "") {
      alert("please enter task");
      return;
    }
    this.props.addTaskHandler(this.state); //state contains task
  };
  //we need to pass this object to app component. we will use props to pass data from child to parent
  render() {
    return (
      <div className="ui main">
        <h2 className="heading">Write Task</h2>
        <form className="ui form" onSubmit={this.add}>
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
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
