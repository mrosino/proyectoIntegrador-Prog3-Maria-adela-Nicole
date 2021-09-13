import React, { Component } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 2,
      inicialMovies: [],
      text: [],
      change: false,
      loaded: false,
      
    };
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((movies) => {
        this.setState({
          movies: movies.results,
          loaded: true,
          inicialMovies: movies.results,
        });
      });
  }

  addMore() {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US&page=" +
      this.state.page;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          page: this.state.page + 1,
          movies: this.state.movies.concat(data.results),
          inicialMovies: this.state.inicialMovies.concat(data.results),
        });
      });
  }

  remove = (id) => {
    let moviesLeft = this.state.movies.filter((movies) => movies.id !== id);
    this.setState({
      movies: moviesLeft,
    });
  };

  filtered(search) {
    let filteredMovies = this.state.inicialMovies.filter((movies) =>
      movies.title.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({
      movies: filteredMovies,
    });
  }
  display() {
    if (this.state.change) {
      this.setState({
        change: false,
      });
    } else {
      this.setState({
        change: true,
      });
    }
  }

  render = () => {
    //poner loader
    return (
      <React.Fragment>
        <Header
          filter={(search) => this.filtered(search)}
          display={() => this.display()}
          change={this.state.change}
        />

        <div>
          {/* <h3>Filtros</h3>
          <div className="container-filtros">
            <button className="button-1" onClick={this.state.orderByNombre}>
              Ordenar por Nombre
            </button>
            <button className="button-1" onClick={this.state.orderByRating}>
              Ordenar por Rating
            </button>
          </div> */}
        </div>
        <main>
          <section className="card-container">
            <section className="navigation">
              <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
              </div>
              <i className="far fa-window-close"></i>
            </section>
            <main className={`${this.state.change ? "main" : "main1"}`}>
              {this.state.loaded ? (
                this.state.movies.map((movies, idx) => {
                  return (
                    <Card
                      movies={movies}
                      key={idx}
                      remove={this.remove}
                      text={this.state.text}
                      display={this.state.change}
                    />
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </main>
          </section>
          <button type="button" onClick={() => this.addMore()}>
            Ver más
          </button>
        </main>
      </React.Fragment>
    );
  };
}

export default Main;
