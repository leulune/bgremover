import React from "react";
import One from "./constructors/One";
import Two from "./constructors/Two";
import Three from "./constructors/Three";
import Four from "./constructors/Four";
import Five from "./constructors/Five";

function Feedback1({children}) {
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
          <One imageUrl="https://assets.remove-bg.ai/images/remove-bg/avatar_1.webp" />
          <Two>Guy Hawkins</Two>
          <div className="mt-8 flex gap-1">
            <Three/>
            <Three/>
            <Three/>
            <Three/>
            <Three/>
          </div>
          <Four>
            Это приложение удивительно, особенно функция удаления объектов. Оно
            очень просто в использовании и делает объекты исчезают, как будто их
            и не было. Я использую эту функцию больше всего, чтобы редактировать
            фотографии для друзей, семьи и себя.
          </Four>
          <Five>7 дек, 2023</Five>
        </div>
      </div>
    </div>
  );
}

export default Feedback1;
