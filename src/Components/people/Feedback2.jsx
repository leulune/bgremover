import React from "react";
import One from "./constructors/One";
import Two from "./constructors/Two";
import Three from "./constructors/Three";
import Four from "./constructors/Four";
import Five from "./constructors/Five";

function Feedback2() {
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
          <One imageUrl="https://assets.remove-bg.ai/images/remove-bg/avatar_2.webp" />
          <Two>Esther Howard</Two>
          <div className="mt-8 flex gap-1">
            <Three />
            <Three />
            <Three />
            <Three />
            <Three />
          </div>
          <Four>
            Я никогда не писал отзывы в своей жизни, но мне пришлось написать
            один. Это приложение - все, у меня много фотографий с странными
            объектами или людьми, и это БЕСПЛАТНОЕ приложение делает все намного
            лучше.
          </Four>
          <Five>12 ноя, 2023</Five>
        </div>
      </div>
    </div>
  );
}

export default Feedback2;
