import React, { Component } from "react";
import Card from "../Cards/Cards";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <React.Fragment>
        <main>
          <button type="button">Cargar más tarjetas</button>
          <section className="card-container">
            <Card />
          </section>
        </main>
      </React.Fragment>
    );
  };
}

export default Main;
