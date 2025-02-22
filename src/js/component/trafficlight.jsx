import React, { useState, useEffect } from "react";
import Ballight from "./ballight";
import ButtonComponent from "./button";

function TrafficLights() {
  const [color, setColor] = useState("red");
  const [isActive, setIsActive] = useState(true);

  const changeColor = () => {
    setColor((prevColor) => {
      if (prevColor === "red") return "yellow";
      if (prevColor === "yellow") return "green";
      return "red";
    });
  };

  // useEffect: se monta el intervalo cuando isActive es true y se limpia cuando cambia
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(changeColor, 1000);
    return () => clearInterval(interval);
  }, [isActive]);

  const stopColor = (selectedColor) => {
    setIsActive(true);
    setColor(selectedColor);
  };

  // Reiniciar el semáforo desde rojo (clic en el botón)
  const restartTrafficLight = () => {
    setColor("red");
    setIsActive(true);
  };

  return (
    <div className="borders">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <h1 className="text-center mt-5">Hello Traffic!</h1>
            <div className="trafficborder">
              <Ballight
                trafficlight={color === "red"}
                light="red"
                onClick={() => stopColor("red")}
              />
              <Ballight
                trafficlight={color === "yellow"}
                light="yellow"
                onClick={() => stopColor("yellow")}
              />
              <Ballight
                trafficlight={color === "green"}
                light="green"
                onClick={() => stopColor("green")}
              />
            </div>
            <div className="palito"></div>
            <ButtonComponent onClick={restartTrafficLight} />
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8 d-flex justify-content-center">
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default TrafficLights;
