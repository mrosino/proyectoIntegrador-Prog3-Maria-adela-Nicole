import React, { Component } from "react";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 2,
      inicialMovies: [],
      text:[],
      display:false,
      loaded:false,
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
        console.log(this.state.page);
        this.setState({
          page: this.state.page + 1,
          movies: this.state.movies.concat(data.results),
          inicialMovies: this.state.inicialMovies.concat(data.results),
        });
      });
  }

  remove = (id) => {
    console.log(id);
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
  display(){
    if (this.state.display) {
      this.setState({
        display:false,
      });
    } else {
      this.setState({
        display: true,
      });
    }
    console.log(this.state.display);
  }

  
  render = () => {
    //poner loader
    return (
      <React.Fragment>
        <Header />
        <div className="row card-container">
          <Filter search={(text) => this.filtered(text)} />
        </div>
        <div>
        <button type="button" onClick={() => this.display()}>
            Change layout
          </button>
          
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
        <main >
        
          <section className="card-container">
            <section className="navigation">
              <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
              </div>
              <i className="far fa-window-close"></i>
            </section>
            <main className={`${this.state.display ? 'main' : 'main1'}`}>
              {this.state.loaded ?
              this.state.movies.map((movies, idx) => {
                return (
                  <Card
                    title={movies.title}
                    overview={movies.overview}
                    genre={movies.genre}
                    vote_average={movies.vote_average}
                    adult={movies.adult}
                    poster_path={movies.poster_path}
                    key={idx}
                    remove={this.remove}
                    id={movies.id}
                    text={this.state.text}
                    display= {this.state.display}
                  />
                );
              })
              :
              <p>Loading...</p>
            }

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
