import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {

  // onLabelClick = () => {
  //   console.log(`Done: ${this.props.label}`);

  //   this.setState(({ done }) => {
  //     return {
  //       done: !done,
  //     };
  //   });
  // };

  // onMarkup = () => {
  //   this.setState(({ important }) => {
  //     return {
  //       important: !important,
  //     };
  //   });
  // };

  render() {
    const { label, onDelete, done, important, onToggleDone, onToggleImportant } = this.props;

    let classNames = "todo-list-item d-flex";

    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <span>
          <button
            type="button"
            onClick={onToggleImportant}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-exclamation" />
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fas fa-trash" />
          </button>
        </span>
      </span>
    );
  }
}
