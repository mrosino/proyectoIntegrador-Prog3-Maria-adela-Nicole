import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      phrase: "See more",
    };
  }
  more() {
    if (this.state.more) {
      this.setState({
        more: false,
        phrase: "See more",
      });
    } else {
      this.setState({
        more: true,
        phrase: "See less",
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <article className={`${this.props.display ? "card" : "card1"}`}>
          <h3 className="title">{this.props.movies.title}</h3>
          

          <img
            className="imagen"
            src={
              "https://image.tmdb.org/t/p/w342/" + this.props.movies.poster_path
            }
            alt=""
          />

          <section className="aditional-info">
            <p className={`${this.state.more ? "show" : "hide"}`}>
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
          <div className="buttons">
          <button
            className="button"
            onClick={() => this.props.remove(this.props.movies.id)}
          >
            Delete
          </button>
          <button className="button" onClick={() => this.more()}>
            {this.state.phrase}
          </button>
          <div>
            <a className="tap" href={`#openModal${this.props.movies.id}`}>
              <button className="button">Tap for description</button>
            </a>
          </div>
          </div>
          <div id={`openModal${this.props.movies.id}`} className="modalDialog">
            <div>
              <a href="#close" title="Close" className="close">
                X
              </a>
              <h2>{this.props.movies.title} </h2>
              <p className="description">{this.props.movies.overview}</p>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default Card;
