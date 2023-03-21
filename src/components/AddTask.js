// creating class component
import React from "react";

class AddTask extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2 className="heading">Write Task</h2>
        <form className="ui form">
          <div className="field">
            <label>Task</label>
            <input type="text" name="name" placeholder="Task" />
          </div>
          <button className="ui button green">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
