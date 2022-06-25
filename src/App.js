import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <div className="Card">
        <div className="CardTitle">Hey, I'm Dikson :)</div>
        <div className="CardBody">
          <p>
            I’m a Brazilian CS student who likes to make cool and pretty stuff.
          </p>

          <p>
            Currently, I’m developing Musa, a website that uses AI to generate
            programming project ideas.
          </p>

          <p>
            If you're interested in seeing what kind of awesome stuff I can do,
            check out my GitHub, LinkedIn and Resume.
          </p>

          <p>Spoiler: Right now, I’m open to work!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
