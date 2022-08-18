import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavbarsList from "./Components/Navbars";
import "./index.scss";

const App = () => (
  <div className="App">
    <div className="background_color">
      <NavbarsList />
    </div>
    <Footer />
  </div>
);

export default App;
