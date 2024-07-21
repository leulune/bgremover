import React from "react";
import One from "./constructors/One";
import Two from "./constructors/Two";
import Three from "./constructors/Three";
import Four from "./constructors/Four";
import Five from "./constructors/Five";

function Feedback4() {
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
          <One imageUrl="https://assets.remove-bg.ai/images/remove-bg/avatar_4.webp" />
          <Two>Cameron Williamson</Two>
          <div className="mt-8 flex gap-1">
            <Three />
            <Three />
            <Three />
            <Three />
            <Three />
          </div>
          <Four>
            Обычно мне приходится многократно использовать свои собственные
            фотографии на разных платформах, и это средство невероятно помогло
            ускорить процесс.
          </Four>
          <Five>20 авг, 2023</Five>
        </div>
      </div>
    </div>
  );
}

export default Feedback4;
