import React from "react";
import Proyects from "./Proyects";
import Services from "./Services";

import Presentation from "./Presentation";
import { data } from "../utils/mocks/data";
import Descripcion from "./Description";
import Skills from "./Skills";
import Training from "./Training";
class Maincito extends React.Component {
  // state = {  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Presentation />
        {/* <Descripcion /> */}
        <Proyects data={this.props.dataProyects} />
        <Training />
        <Skills />
        <Services data={data.services} />
      </div>
    );
  }
}

export default Maincito;
