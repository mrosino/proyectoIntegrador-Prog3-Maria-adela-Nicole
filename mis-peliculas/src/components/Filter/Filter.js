import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  notAuto(event) {
    event.preventDefault();
  }

  changeControl(event) {
    this.setState(
      {
        value: event.target.value,
      },
      () => this.props.filter(this.state.value)
    );
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={(eventSubmit) => this.notAuto(eventSubmit)}>
        <input className="filter"
          type="text"
          onChange={(event) => this.changeControl(event)}
          value={this.state.value}
          placeholder="Search titles.."
        />
      </form>
    );
  }
}

export default Filter;
