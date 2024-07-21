import React from "react";
import Background from "../helpages/Background";

function Benefits() {
  return (
    <div>
      <div className="bg-white lg:pt-24 lg:pb-[120px] pt-10">
        <div className="container-8 text-center flex items-center justify-center flex-col lg:mb-16">
          <div className="text-center">
            <p className="font-semibold text-[18px] leading-[22px] text-blue-600">
              Преимущества
            </p>
          </div>
          <h2 className="H30B lg:w-[620px] lg:H48B mt-3">
            Удалить фоновое фото онлайн без необходимости
          </h2>
          <span className="inline-block leading-normal ai-gradient">
            профессионалы!
          </span>
        </div>
        <Background />
      </div>
    </div>
  );
}

export default Benefits;
