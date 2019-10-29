import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const test = "bartek";

function App() {
  return (
    <div className="App">
      my name is <span className="test">{test}</span>
      <div>
        <Header headerName="edyta" />
        <Header headerName="ewelina" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
