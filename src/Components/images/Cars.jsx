import React from "react";

function Cars() {
  return (
    <>
      <div className="text-center">
        <div className="w-[280px] h-[372px]">
          <img
            src="https://assets.remove-bg.ai/images/remove-bg/use_case_4_1.webp"
            alt="https://assets.remove-bg.ai/images/remove-bg/use_case_4_1.webp"
            width="280"
            height="372"
            loading="lazy"
          />
        </div>
        <p className="font-normal text-[16px] leading-[24px] mt-4">Оригинал</p>
      </div>
      <div className="text-center">
        <div className="w-[280px] h-[372px]">
          <img
            src="https://assets.remove-bg.ai/images/remove-bg/use_case_4_2.webp"
            alt="https://assets.remove-bg.ai/images/remove-bg/use_case_4_2.webp"
            width="280"
            height="372"
            loading="lazy"
          />
        </div>
        <p className="font-normal text-[16px] leading-[24px] mt-4">
          Удалить фон
        </p>
      </div>
      <div className="text-center">
        <div className="w-[280px] h-[372px]">
          <img
            src="https://assets.remove-bg.ai/images/remove-bg/use_case_4_3.webp"
            alt="https://assets.remove-bg.ai/images/remove-bg/use_case_4_3.webp"
            width="280"
            height="372"
            loading="lazy"
          />
        </div>
        <p className="font-normal text-[16px] leading-[24px] mt-4">
          Добавить новый фон
        </p>
      </div>
    </>
  );
}

export default Cars;
