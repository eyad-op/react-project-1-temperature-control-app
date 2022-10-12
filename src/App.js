import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const setColor = (temperature) => {
    return temperature < 16
      ? setTemperatureColor("cold")
      : setTemperatureColor("hot");
  };

  const decreaseTemperature = () => {
    if (temperatureValue <= 0) return;
    const newTemperature = temperatureValue - 1;
    setColor(newTemperature);
    setTemperatureValue(newTemperature);
  };
  const increaseTemperature = () => {
    if (temperatureValue >= 25) return;
    const newTemperature = temperatureValue + 1;
    setColor(newTemperature);
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => decreaseTemperature()}>-</button>
        <button onClick={() => increaseTemperature()}>+</button>
      </div>
    </div>
  );
};

export default App;
