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
            {this.props.change  ?  <BiDotsVertical /> : <BiListUl />}
          
            </button>
          </section>
        </header>
       
      </React.Fragment>
    );
  };
}
export default Header;
