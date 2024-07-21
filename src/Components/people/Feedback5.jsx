import React from "react";
import One from "./constructors/One";
import Two from "./constructors/Two";
import Three from "./constructors/Three";
import Four from "./constructors/Four";
import Five from "./constructors/Five";

function Feedback5() {
  return (
    <div
      data-index="0"
      className="slick-slide"
      tabIndex="-1"
      aria-hidden="true"
      style={{ outline: "none", width: "407px" }}
    >
      <div>
        <div
          className="px-10"
          tabIndex="-1"
          style={{ width: "100%", display: "inline-block" }}
        >
          <One imageUrl="https://assets.remove-bg.ai/images/remove-bg/avatar_5.webp" />
          <Two>Oscar Schultz</Two>
          <div className="mt-8 flex gap-1">
            <Three />
            <Three />
            <Three />
            <Three />
            <Three />
          </div>
          <Four>Отличный инструмент для удаления фона с изображений!</Four>
          <Five>28 дек, 2023</Five>
        </div>
      </div>
    </div>
  );
}

export default Feedback5;
