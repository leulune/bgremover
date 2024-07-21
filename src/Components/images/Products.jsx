import React from "react";

function Products() {
  return (
    <>
      <div className="text-center">
        <div className="w-[280px] h-[372px]">
          <img
            src="https://assets.remove-bg.ai/images/remove-bg/use_case_2_1.webp"
            alt="https://assets.remove-bg.ai/images/remove-bg/use_case_2_1.webp"
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
            src="https://assets.remove-bg.ai/images/remove-bg/use_case_2_2.webp"
            alt="https://assets.remove-bg.ai/images/remove-bg/use_case_2_2.webp"
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
            src="https://assets.remove-bg.ai/images/remove-bg/use_case_2_3.webp"
            alt="https://assets.remove-bg.ai/images/remove-bg/use_case_2_3.webp"
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

export default Products;
