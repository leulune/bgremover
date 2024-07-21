import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./ColorPicker.css";

const ColorPicker = ({ onColorChange, activeButton, setActiveButton }) => {
  const [color, setColor] = useState("#24a3b4");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
      setIsOpen(!isOpen);
      setActiveButton("circle1");
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="relative z-10">
      <button
        className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
          activeButton === "circle1"
            ? "border-blue-500 after:opacity-100"
            : ""
        } border-white after:opacity-0 color-picker-conic-gradient`}
        onClick={handleButtonClick}
        style={{ backgroundColor: "color-picker-conic-gradient" , color}}
      ></button>
      <div
        className={`absolute translate-y-1 right-0 mt-2 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <HexColorPicker color={color} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default ColorPicker;
