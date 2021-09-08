import React, {Component} from "react";

class Card extends Component{
        
    constructor(props){
        super(props)
    }

render (){ 

  return (
    <React.Fragment>
          <h3>{this.props.title}</h3>
          <img src= {"https://image.tmdb.org/t/p/w342/" + this.props.poster_path} alt="" />
          <p className="description"> Descripcion: {this.props.overview}</p>
          <section className="aditional-info">
            <p>Genero {this.props.genre}</p>
            <p>Rating {this.props.vote_average}</p>
            <p>{this.props.adult === false ? "ATP": "No ATP"}  </p>
        
          </section>
          <a href="#">Ver más</a>
   
    </React.Fragment>
  );
} }
export default Card;
