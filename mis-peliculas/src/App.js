import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <body>
          <Header />
          <Main />
          <Footer />
        </body>
      </div>
    );
  }
}
export default App;
