import React, {Component} from "react";

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      text: "Ver más"
    };
  }
  more() {
    if (this.state.more) {
      this.setState({
        more: false,
        text: "Ver más"
      })
      
    }else {
      this.setState({
          viewMore: true,
          text: 'Ver menos'
      })            
  }

  }

render (){ 

  return (
    <React.Fragment>
      <article className="card">
      <button onClick={() => this.props.remove(this.props.id)}>Borrar</button>
          <h3>{this.props.title}</h3>
         
          <img className="imagen" src= {"https://image.tmdb.org/t/p/w342/" + this.props.poster_path} alt="" />
          <div> 
          <p className="description"> Descripcion: {this.props.overview}</p>
          </div>
          {/* <button onClick = {( => this.props.moreInfo ())}>Ver más</button> */}
          <section className="aditional-info">
          <h2 className='more' onClick={()=>this.more()}>{this.state.text}</h2>
            <p>Genero {this.props.genre}</p>
            <p>Rating {this.props.vote_average}</p>
            <p>{this.props.adult === false ? "ATP": "No ATP"}  </p>
            </section>
          </article>
   
    </React.Fragment>
  );
} }
export default Card;
