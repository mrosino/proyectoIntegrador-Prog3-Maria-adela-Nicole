import React, {Component} from "react";

class Card extends Component{
  remove(id) {
    let moviesLeft = this.state.movies.filter( movies => movies.id !== id);
    this.setState({
        movies: moviesLeft
    })
  }       


render (){ 

  return (
    <React.Fragment>
      <article className="card">
        
          <h3>{this.props.title}</h3>
         
          <img className="imagen" src= {"https://image.tmdb.org/t/p/w342/" + this.props.poster_path} alt="" />
          <div> 
          <p className="description"> Descripcion: {this.props.overview}</p>
          </div>
          {/* <button onClick = {( => this.props.moreInfo ())}>Ver más</button> */}
          <div className="aditional-info">
          <p>Genero {this.props.genre}</p>
            <p>Rating {this.props.vote_average}</p>
           
            <p>{this.props.adult === false ? "ATP": "No ATP"}  </p>
            <button onClick={() => this.remove(this.props.id)}>Borrar</button>
          
          </div>     
          
      
          </article>
   
    </React.Fragment>
  );
} }
export default Card;
