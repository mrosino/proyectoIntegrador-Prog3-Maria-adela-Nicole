import React, {Component} from "react";

import Filter from "../Filter/Filter"


class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        inicialMovies: [],
        genre: [],
        page: 2,
      };
    }


    filtered(search) {
        let filteredMovies = this.state.movies.filter( movies => movies.title.toLowerCase().includes(search.toLowerCase()))
        this.setState({
          movies: filteredMovies
        })
      }  

    render = () => {
return (
    < React.Fragment>
    <header>
    <img src="../img/logoSMA.png" alt="" />
    <section>
        <div>
        <Filter search={(text)=>this.filtered(text) }/>
           
        </div>
    </section>
    </header>
     {/* <header>
<h1>Título/ Nombre de la app</h1>
<section>
    <p>Ordenar ASC/ DESC</p>
    <i className="fas fa-th"></i>
    <i className="fas fa-align-justify"></i>
    <form action="">
        <input type="text" name="search" id="" placeholder="Search">
        <button type="submit"><i className="fas fa-search"></i></button>
    </form>
</section>
</header>  */}
    </React.Fragment>
)
}
}
export default Header;