import React, { useState } from "react";
import "./css/Slider.css"

const Slider = ({ name, max, func }) => {
  const [Value, setValue] = useState(0);

  const handleInput = (event) => {
    const value = event.target.value;
    setValue(value);
    func(Value);
  };

  return (
    <div id="slider">
      <p>{name}</p>
      <input
        id="Slider"
        type="range"
        min="0"
        max={max}
        value={Value}
        onInput={handleInput}
      />
      <p id="Output">{Value}</p>
    </div>
  );
};

export default Slider;
