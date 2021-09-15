import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      phrase: "Ver más",
    };
  }
  more() {
    if (this.state.more) {
      this.setState({
        more: false,
        phrase: "Ver más",
      });
    } else {
      this.setState({
        more: true,
        phrase: "Ver menos",
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <article className={`${this.props.display ? "card" : "card1"}`}>
          <button className="button"  onClick={() => this.props.remove(this.props.movies.id)}>
            Borrar
          </button>
          <button className="button" onClick={() => this.more()}>
              {this.state.phrase}
            </button>
          <h3>{this.props.movies.title}</h3>

          <img
            className="imagen"
            src={
              "https://image.tmdb.org/t/p/w342/" + this.props.movies.poster_path
            }
            alt=""
          />
          <div>
            <p className="description">
              {" "}
              Description: {this.props.movies.overview}
            </p>
          </div>

          <section className="aditional-info">
            

            <p className={`${this.state.more ? "show" : "hide"}`}>
              {" "}
              Rating {this.props.movies.vote_average}
            </p>
            <p className={`${this.state.more ? "show" : "hide"}`}>
              {" "}
              ATP {this.props.movies.adult}
            </p>
            <p className={`${this.state.more ? "show" : "hide"}`}>
              {" "}
              Release Date: {this.props.movies.release_date}
            </p>
            <p className={`${this.state.more ? "show" : "hide"}`}>
              {" "}
              Popularity: {this.props.movies.popularity}
            </p>
          </section>
        </article>
      </React.Fragment>
    );
  }
}
export default Card;
