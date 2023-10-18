import React from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Ojo Eniola and it is{" "}
          <a
            href="https://github.com/ojoeniola/my-first-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>{" "}
          and{" "}
          
        </footer>
      </div>
    </div>
  );
}

export default App;
