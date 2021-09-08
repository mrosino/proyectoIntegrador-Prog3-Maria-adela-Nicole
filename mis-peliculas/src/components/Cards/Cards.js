import React, {Component} from "react";
import Card from "../Card/Card"

function Cards (props){
  return (
    <React.Fragment>
   <article>
        <section className="navigation">
          <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <i className="far fa-window-close"></i>
        </section>
        <main>
          {props.movies.map ((movies))}
          < Card />

        </main>
      </article>
    </React.Fragment>
  )

}
export default Cards;