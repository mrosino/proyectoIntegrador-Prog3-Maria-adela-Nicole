import React, {Component} from "react";
import './card.css';

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      more: false,
      phrase: 'Ver más'
    };
  }
  more() {
    if (this.state.more) {
      this.setState({
        more:false,
        phrase: "Ver más",
       
      });
    } else {
      this.setState({
        more: true,
        phrase: "Ver menos",
      
      });
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
     
          <section className="aditional-info">
       
          <button className='more' onClick={()=>this.more()}>{this.state.phrase}</button>
   
          <p className={`${this.state.more ? 'show' : 'hide'}`}> Rating {this.props.vote_average}</p>  
          <p className={`${this.state.more ? 'show' : 'hide'}`}> ATP {this.props.adult}</p>  
          <p className={`${this.state.more ? 'show' : 'hide'}`}> Genre {this.props.genre}</p>  
        
            </section>
          </article>
   
    </React.Fragment>
  );
} }
export default Card;
