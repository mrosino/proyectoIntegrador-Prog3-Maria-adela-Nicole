import React, { Component } from "react";
import Cards from "../Cards/Cards";
//import Card  from "../Card/Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genre: [],
     
    };

  }
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US&page=1"
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.results,
          loaded: true,
          

        })
        console.log(movies);

      }),

    // fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US")
    //   .then(response => response.json())
    //   .then(genre => {
    //     this.setState({
    //       genre: genre.results
    //     })

    //     console.log(genre);
    //   })

    }



  addMore() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=35c3a4bec2a3c008c9fa7737b86aadc1&language=en-US&page=" + this.state.page + 1
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          id:this.state.page +1,
          movies: this.state.movies.concat(data.results)

        })
      })


    }




        render = () => {
          //poner loader
          return (
            <React.Fragment>
              <div>
                <h3>Buscador</h3>
              </div>
              <div>
                <h3>Filtros</h3>
                <div className="container-filtros">
                  <button className="button-1" onClick={this.state.orderByNombre}>Ordenar por Nombre</button>
                  <button className="button-1" onClick={this.state.orderByRating}>Ordenar por Rating</button>
                </div>
              </div>
              <main>
                <button type="button" onClick={ ()=>this.addMore()}>Cargar más tarjetas</button>
                <section className="card-container">
                  <Cards movies={this.state.movies} />
                </section>
              </main>
            </React.Fragment>
          );
        };
      }

export default Main;
