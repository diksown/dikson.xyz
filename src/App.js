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
            Currently, I’m developing{" "}
            <a href="https://musa.dikson.xyz/">Musa</a>, a website that uses AI
            to generate programming project ideas.
          </p>

          <p>
            If you're interested in seeing what kind of awesome stuff I can do,
            check out my <a href="https://github.com/diksown">GitHub</a>,{" "}
            <a href="https://www.linkedin.com/in/diksown/">LinkedIn</a> and{" "}
            <a href="https://drive.google.com/file/d/1X1jBj0hRpKjfQzi-3c3VitK7ewcdV5H7/view">
              Resume
            </a>
            .
          </p>

          <p>Spoiler: Right now, I’m open to work!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
