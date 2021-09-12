import React, { Component } from "react";

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
      () => this.props.search(this.state.value)
    );
  }

  render() {
    return (
      <form onSubmit={(eventSubmit) => this.notAuto(eventSubmit)}>
        <input
          type="text"
          onChange={(event)=>this.changeControl(event)}
          value={this.state.value}
          placeholder="Buscar..."
        />
      </form>
    );
  }
}

export default Filter;
