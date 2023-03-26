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
        <div className="CardBody">
          <p>Hey, I'm</p>
        </div>
        <div className="CardTitle">Dikson Santos_</div>
        <div className="CardBody">
          <p>20 year old computer science student</p>
          <span>&lt;3 maths, cryptography, design, AI & etc</span>
        </div>
      </div>
    </div>
  );
}

export default App;
