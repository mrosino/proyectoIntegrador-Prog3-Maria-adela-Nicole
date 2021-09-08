import React, { Component } from "react";
import Cards from "../Cards/Cards";
//import Card  from "../Card/Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genre : [],
    };

  }
componentDidMount(){
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US&page=1")
  .then(response => response.json())
  .then(movies => {
    this.setState({
      movies:movies.results,
      loaded: true,
    })
    console.log(movies);

  }) 
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US")
  .then(response => response.json())
  .then (genre => {
    this.setState ({
      genre: genre.results
    })
    console.log(genre);
  })
 
}
  render = () => {
    //poner loader
    return (
      <React.Fragment>
        <main>
          <button type="button">Cargar más tarjetas</button>
          <section className="card-container">
            <Cards movies ={this.state.movies}/>
          </section>
        </main>
      </React.Fragment>
    );
  };
}

export default Main;
