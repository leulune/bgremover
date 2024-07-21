import React from "react";
import One from "./constructors/One";
import Two from "./constructors/Two";
import Three from "./constructors/Three";
import Four from "./constructors/Four";
import Five from "./constructors/Five";

function Feedback3() {
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
          <One imageUrl="https://assets.remove-bg.ai/images/remove-bg/avatar_3.webp" />
          <Two>Darrell Steward</Two>
          <div className="mt-8 flex gap-1">
            <Three />
            <Three />
            <Three />
            <Three />
            <Three />
          </div>
          <Four>
            Мне очень нравится, что приложение предоставляет качественные
            редакции, и мне нужно только посмотреть несколько видеороликов. Я
            использовал несколько средств для удаления объектов, и это одно из
            моих двух основных приложений. Определенно лучшее среди бесплатных
            приложений для улучшения!
          </Four>
          <Five>24 окт, 2023</Five>
        </div>
      </div>
    </div>
  );
}

export default Feedback3;
