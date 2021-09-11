import React from "react";
import Card from "../Card/Card"


function Cards (props){
  return (
    <React.Fragment>
 
        <section className="navigation">
          <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <i className="far fa-window-close"></i>
        </section>
        <main>
          {props.movies.map ((movies,idx) => {
            return  < Card title={movies.title} overview ={movies.overview} genre = {movies.genre} vote_average= {movies.vote_average} adult={movies.adult} poster_path= {movies.poster_path} key= {idx} />
          })}
          

        </main>
    
    </React.Fragment>
  )

}
export default Cards;