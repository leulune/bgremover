import React from "react";
import { useFile } from "../helpages/UseFile";
import { useNavigate } from 'react-router-dom';
import cat from '../pages/assets/kitty.png';
import flower from '../pages/assets/cbimage.png';
import dog from '../pages/assets/dog.png';
import girl from '../pages/assets/girl.png';


function Header() {
  const { fileInput, handleBtnClick, handleFileChange } = useFile();
  const navigate = useNavigate();

  const handleImgClick = (imageUrl) => {
    navigate('/upload', { state: { imageUrl } });
  };

  return (
    <div className="bg-white relative z-1">
      <div className="hero-bg">
        <div className="container2 pt-24 lg:pb-24 space-y-6 lg:relative lg:space-y-0 lg:min-h-[700px] lg:pt-40 lg+:flex md:flex-row lg:justify-between lg:items-start lg:gap-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center min-h-[700px] relative  
       lg:flex md:flex-row justify-between items-start"
          >
            <div className="lg:w-[50%] lg+:text-left">
              <h1 className="text-neutral-ink-700 font-bold text-3xl lg:text-5.5xl lg:mb-6 mb-3 ml-10 text-center !leading-tight sm:H30B lg:H56B lg+:text-left">
                Remove BG (удаление фона) с помощью AI — бесплатно и в HD
                <div className="block absolute left-0 bottom-1.5 lg:bottom-2 w-full h-2 lg:h-3 mx-auto mt-3 lg:mx-0 lg:mt-0">
                  <span className="relative z-10"></span>
                </div>
              </h1>
              <p
                className="text-grey-08 text-center lg:text-left T16R lg:T20R ml-10"
                style={{ fontSize: "20px" }}
              >
                Автоматически - Быстро - Бесплатно и Просто
              </p>
              <div className="lg:py-8 py-4 T16R lg:T20R ml-10">
                <div className="relative rounded-[32px] bg-gradient-to-l from-transparent to-white lg:h-40 h-[120px] flex justify-center flex-col items-center lg+:w-[378px] border-[3px] border-white">
                  <div>
                    <button
                      className="inline-flex items-center justify-center py-3 px-4 bg-primary text-base !cursor-pointer transition 
                      text-white hover:bg-opacity-80 !rounded-full h-14 bg-gradient shadow-[0px_4px_32px_rgba(43,61,227,0.24)] !w-[232px]"
                      onClick={handleBtnClick}
                    >
                      <span className="inline-flex mr-2">
                        <div
                          size="24"
                          color="inherit"
                          mode="outline"
                          className="text-center text-black font-semibold"
                        >
                          <svg
                            className="inline-block align-middle text-white font-semibold"
                            width="24"
                            height="24"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M17 8L12 3L7 8"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M12 3V15"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </span>
                      <span className="text-[18px] leading-[26px] font-semibold">
                        Загрузить изображение
                      </span>
                    </button>
                    <input
                      type="file"
                      ref={fileInput}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className="font-normal text-[16px] leading-[24px] hidden mt-4 lg:inline-block text-neutral-ink-600 text-center">
                    Или просто перетащите сюда / Ctrl + V для вставки
                    изображения
                  </p>
                </div>
                <div className="lg+:mt-10 mt-4 lg+:flex text-center lg+:text-start">
                  <p className="font-normal text-[16px] leading-[24px] mb-3 text-neutral-ink-600 w-[155px] hidden lg+:block">
                    Нет изображения? Попробуйте один из этих
                  </p>
                  <p className="font-normal text-[16px] leading-[24px] mb-3 text-neutral-ink-600 block lg+:hidden">
                    No image? Try one of these
                  </p>
                  <ul className="space-x-3">
                    <li className="inline-block">
                      <button onClick={() => handleImgClick(cat)} className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.remove-bg.ai/images/sample-remove-bg-1-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button onClick={() => handleImgClick(flower)} className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.remove-bg.ai/images/sample-remove-bg-2-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button onClick={() => handleImgClick(dog)} className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.remove-bg.ai/images/sample-remove-bg-3-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button onClick={() => handleImgClick(girl)} className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.remove-bg.ai/images/sample-remove-bg-4-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-full lg:w-[48%] md:w-[50%] hidden lg:block ">
              <img
                className="w-full sm: width-372 height-288"
                src="https://assets.remove-bg.ai/images/remove_background_from_image_free.webp"
                alt="remove background from images with remove-bg.ai"
                width="554"
                height="473"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
