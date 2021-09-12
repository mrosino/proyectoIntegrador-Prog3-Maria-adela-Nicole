import React, { Component } from "react";
import Card from "../Card/Card";
import Filter from "../Filter/Filter"
import Header from "../Header/Header"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genre: [],
      page: 2,
      inicialMovies: [],
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

  // fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US")
  //   .then(response => response.json())
  //   .then(genre => {
  //     this.setState({
  //       genre: genre.results
  //     })

  //     console.log(genre);
  //   })

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
    let moviesLeft = this.state.movies.filter( movies => movies.id !== id);
    this.setState({
        movies: moviesLeft
    })
 
  } 
  filtered(search) {
    let filteredMovies = this.state.inicialMovies.filter( movies => movies.title.toLowerCase().includes(search.toLowerCase()))
    this.setState({
      movies: filteredMovies
    })
  }   

  render = () => {
    //poner loader
    return (
      <React.Fragment>
        <Header />
        <div className="row card-container">
          <Filter search={(text)=>this.filtered(text) }/>
        </div>
        <div>
          <h3>Filtros</h3>
          <div className="container-filtros">
            <button className="button-1" onClick={this.state.orderByNombre}>
              Ordenar por Nombre
            </button>
            <button className="button-1" onClick={this.state.orderByRating}>
              Ordenar por Rating
            </button>
          </div>
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
              <main>
                {this.state.movies.map((movies, idx) => {
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
                    />
                  );
                })}
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
