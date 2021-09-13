import React, { Component } from "react";
import Filter from "../Filter/Filter";
import "./header.css";
import { BiListUl, BiDotsVertical } from "react-icons/bi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Change layout",
    };
  }

  render = () => {
    return (
      <React.Fragment>
        <header>
          <section className="header">
            <div className="logo">
              <img className="img" src="./img/logoSMA.jpg" alt="logo" />
            </div>

            <div>
              <div className="row card-container">
                <Filter filter={this.props.filter} />
              </div>
            </div>
            

            <button type="button" onClick={() => this.props.display()}>
            {this.props.display.logo === 'list'  ?  <BiDotsVertical /> : <BiListUl />}
          
            </button>
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
    );
  };
}
export default Header;
