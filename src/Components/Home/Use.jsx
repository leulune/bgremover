import React from "react";
import Carousel from "../helpages/Carousel";
import Download from "../helpages/Download";

const slides = [
  "https://assets.remove-bg.ai/images/remove-bg/upload_an_image.webp",
  "https://assets.remove-bg.ai/images/remove-bg/remove_edit_background.webp",
  "https://assets.remove-bg.ai/images/remove-bg/download_in_HD.webp",
];

function Use() {
  return (
    <>
      <div className="lg:pb-24 pb-10 bg-white">
        <div className="lg:containers lg:pb-0 mx-6">
          <div className="container-8 lg:mt-24 mt-9 text-center">
            <p className="font-semibold text-[18px] leading-[22px] text-blue-600">
              Как использовать
            </p>
          </div>
          <div className="lg:mb-12 mt-3 text-center">
            <h2 className="container-8 snap-block-heading">
              Удаление фона для любого изображения с помощью Remove-BG.AI
            </h2>
            <p className="text-neutral-ink-600 mt-6 text-center lg:w-2/3 lg:mx-auto T16R">
              <span>
                С помощью ластика Remove-BG.AI -
                <a href="/ru">
                  <b> Удалить фон</b>
                </a>{" "}
                вам больше не нужно кропотливо прочесывать каждое изображение с
                помощью Photoshop , Adobe для удаления фона. Следуйте нашим
                инструкциям ниже, и всего за несколько секунд наш инструмент для
                удаления фона с искусственным интеллектом без особых усилий
                создаст HD-версию вашей фотографии без фона!
              </span>
              <a href="/ru">
                <span
                  aria-label="RemoveBg Url"
                  className="font-medium text-blue-500 hover:underline"
                ></span>
              </a>
              <a href="/ru">
                <span
                  aria-label="RemoveBg Url"
                  className="font-medium text-blue-500 hover:underline"
                ></span>
              </a>
            </p>
          </div>
          <Carousel autoSlide={true}>
            {slides.map((s) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src={s} />
            ))}
          </Carousel>
        </div>
      </div>
      <Download />
    </>
  );
}

export default Use;
