import React from "react";
import logo from "../img/1.jpg";
import Header from "../Components/Header";
import Maincito from "../Components/Maincito";
import { data } from "../utils/mocks/data";
// import Main from "../Components/Main";

import "../App.css";
import Footer from "../Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Maincito dataProyects={data.proyects} />

      <Footer />
    </div>
  );
}

export default App;
