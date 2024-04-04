// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { useEffect, useState } from "react";

const Index = () => {
  const [color, setColor] = useState("#fff");

  function colorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function randomHexColor() {
    //#f05g08
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[colorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  useEffect(() => {
    randomHexColor();
  }, []);

  function randomRgbColor() {}
  return (
    <>
      <div
        style={{ height: "100vh", width: "100vw", backgroundColor: color }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container">
          <div className="row">
            <div className="text-center ">
              <h1>Random Color Generator!</h1>
              <br />
              <h1>{color}</h1>
              <br />
              <button className="btn btn-dark" onClick={() => randomHexColor()}>
                Create Random color
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
