import React, { Component } from "react";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onInputChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: ""})
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
        className="form-control col-9"
          type="text"
          onChange={this.onInputChange}
          placeholder="Type your todo"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
