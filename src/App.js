import React from "react";
import "./App.css";
import Header from "./Header/Header";

const test = "bartek";

function App() {
  return (
    <div className="App">
      my name is <span className="test">{test}</span>
      <div>
        <Header headerName="edyta" />
      </div>
    </div>
  );
}

export default App;
