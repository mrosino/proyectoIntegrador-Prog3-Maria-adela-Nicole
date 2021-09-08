import React, {Component} from "react";

class Card extends Component{
        
    constructor(props){
        super(props)
    }

render (){ 

  return (
    <React.Fragment>
          <img src="./img/image-default.png" alt="" />
          <h3>{this.props.title}</h3>
          <p className="description">{this.props.description}</p>
          <section className="aditional-info">
            <p>{this.props.genre}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
              atque.
            </p>
            <p>{this.props.rating}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
              atque.
            </p>
            <p>{this.props.atp}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
              atque.
            </p>
          </section>
          <a href="#">Ver más</a>
   
    </React.Fragment>
  );
} }
export default Card;
