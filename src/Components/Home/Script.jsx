import React, { useState } from "react";
import People from "../images/People";
import Products from "../images/Products";
import Animals from "../images/Animals";
import Cars from "../images/Cars";
import Graphics from "../images/Graphics";

function Script() {
    const [changeImage, setChangeImage] = useState('people');

    const handleClick = (button) => {
        if (button !== changeImage) {
            setChangeImage(button)
        }
    };

  return (
    <div className="container-8 lg:pb-24 pb-10 bg-white">
      <div className="lg:mt-24 mt-9 text-center">
        <p className="font-semibold text-[18px] leading-[22px] text-blue-600">
          Сценарий использования
        </p>
      </div>
      <div className="text-center lg:mb-10 mb-6 mt-3">
        <h2 className="snap-block-heading">Больше, чем просто удаление фона</h2>
        <p className="text-neutral-ink-600 mt-6 lg:w-2/3 lg:mx-auto T16R">
          Создайте мгновенно прозрачный фон и превратите ваши изображения в
          искусство, потрясающие баннеры, визуальные презентации, каталоги
          продуктов и графику. Полностью настраиваемо под ваши потребности.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex gap-3 pb-8 overflow-x-auto w-full lg:w-auto hide-scrollbars">
          <div 
           onClick={() => handleClick('people')} 
           className={`button inline-block rounded-[40px] py-2 px-5 border border-neutral-ink-200 cursor-pointer ${changeImage === 'people' ? "bg-black text-white" : "" }`}
           >
            Люди
          </div>
          <div 
          onClick={()=>handleClick('products')} 
          className={`button inline-block rounded-[40px] py-2 px-5 border border-neutral-ink-200 cursor-pointer ${changeImage === 'products' ? "bg-black text-white" : "" }`}
          >
            Продукты
          </div>
          <div 
          onClick={()=>handleClick('animals')} 
          className={`button inline-block rounded-[40px] py-2 px-5 border border-neutral-ink-200 cursor-pointer ${changeImage === 'animals' ? "bg-black text-white" : "" }`}
          >
            Животные
          </div>
          <div 
          onClick={()=>handleClick('cars')} 
          className={`button inline-block rounded-[40px] py-2 px-5 border border-neutral-ink-200 cursor-pointer ${changeImage === 'cars' ? "bg-black text-white" : "" }`}
          >
            Автомобили
          </div>
          <div 
          onClick={()=>handleClick('graphics')} 
          className={`button inline-block rounded-[40px] py-2 px-5 border border-neutral-ink-200 cursor-pointer ${changeImage === 'graphics' ? "bg-black text-white" : "" }`}
          >
            Графика
          </div>
        </div>
        <div onClick={handleClick} className={`${changeImage === 'people' ? "" : "hidden" } mt-8 flex gap-8 overflow-x-auto w-full lg:w-auto hide-scrollbars`}>
          <People />
        </div>
        <div onClick={handleClick} className={`${changeImage === 'products' ? "" : "hidden" } mt-8 flex gap-8 overflow-x-auto w-full lg:w-auto hide-scrollbars`}>
          <Products />
        </div>
        <div onClick={handleClick} className={`${changeImage === 'animals' ? "" : "hidden" } mt-8 flex gap-8 overflow-x-auto w-full lg:w-auto hide-scrollbars`}>
          <Animals />
        </div>
        <div onClick={handleClick} className={`${changeImage === 'cars' ? "" : "hidden" } mt-8 flex gap-8 overflow-x-auto w-full lg:w-auto hide-scrollbars`}>
          <Cars />
        </div>
        <div onClick={handleClick} className={`${changeImage === 'graphics' ? "" : "hidden" } mt-8 flex gap-8 overflow-x-auto w-full lg:w-auto hide-scrollbars`}>
          <Graphics />
        </div>
      </div>
    </div>
  );
}

export default Script;
