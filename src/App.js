import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import IconLink from "./IconLink";
import { mdiGithub, mdiFileAccount, mdiLinkedin, mdiAt } from "@mdi/js";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <div className="Card">
        <div className="CardTitle">
          Dikson Santos<span className="ColoredDetail">_</span>
        </div>
        <div className="CardBody">
          <div>full stack dev @ mindsight</div>
          <div>cs undergrad @ icmc usp</div>
          <div>&lt;3 maths, cryptography, design, AI & etc</div>
        </div>
        <div className="IconList">
          <IconLink link="https://github.com/diksown" icon={mdiGithub} />
          <IconLink link="https://linkedin.com/diksown" icon={mdiLinkedin} />
          <IconLink link="mailto:diksonfer@gmail.com" icon={mdiAt} />
          <IconLink
            link="https://drive.google.com/file/d/1X1jBj0hRpKjfQzi-3c3VitK7ewcdV5H7/view"
            icon={mdiFileAccount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
