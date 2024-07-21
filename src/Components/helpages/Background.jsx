import React from "react";
import { useFile } from "../helpages/UseFile";

function Background() {
  const { fileInput, handleBtnClick, handleFileChange } = useFile();

  return (
    <div className="container-8 space-y-10 pt-8 lg:pt-24 lg:space-y-24">
      <div className="lg:flex lg:justify-between lg:items-center text-base-content-primary">
        <img
          src="https://assets.remove-bg.ai/images/remove-bg/remove_background_auto.webp"
          alt="ИИ автоматически удаляет фон"
          className="lg:order-2 lg:max-w-[528px] w-[696px] lg:w-full lg:rounded-2xl mb-4"
        />
        <div className="lg:pr-20 lg:mt-4 mt-8 flex justify-start flex-col lg:items-start items-center">
          <div
            className="w-14 h-14 p-2 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#FCFAF8" }}
          >
            <div
              className="w-10 h-10 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#F6F0EA" }}
            >
              <div color="#725631" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="22"
                  height="22"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    id="Vector"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#725631"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M12.5 8.5H15.5V11.5"
                    stroke="#725631"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M11.5 15.5H8.5V12.5"
                    stroke="#725631"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="lg:text-[32px] lg:mt-10 mt-6 sm+:text-2xl text-xl font-semibold lg:text-start text-center">
            Автоматическое удаление фона с использованием искусственного
            интеллекта
          </h3>
          <p className="lg:text-base text-sm sm+:text-[16px] mt-4 lg:text-start sm+:text-center">
            Продвинутый искусственный интеллект позволяет автоматически
            обнаруживать объекты, передние планы и границы в считанные секунды.
            С помощью улучшенных алгоритмов он легко справляется с сложными
            фонами, содержащими волосы и мех. Remove-BG.AI полезен для
            редакторов изображений, дизайнеров, маркетологов и творцов всех
            уровней.
          </p>
          <button
            className="font-semibold mt-8 flex items-center justify-center"
            style={{ color: "#725631" }}
            onClick={handleBtnClick}
          >
            <span className="inline-block align-middle">
              <p className="text-[18px] leading-[26px] font-semibold">
                Попробуй
              </p>
            </span>
            <div
              size="29"
              color="#725631"
              mode="outline"
              className="text-center ml-1 align-middle inline-block"
            >
              <svg
                className="inline-block align-middle ml-1"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#725631"
              >
                <path
                  d="M41.9999 24H5.99994"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M30 12L42 24L30 36"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center text-base-content-primary">
        <img
          src="https://assets.remove-bg.ai/images/remove-bg/edit_cutout.webp"
          alt="Ручное редактирование выреза"
          className="lg:max-w-[528px] w-[696px] lg:w-full lg:rounded-2xl mb-4"
        />
        <div className="lg:pl-20 lg:mt-4 mt-8 flex justify-start flex-col lg:items-start items-center">
          <div
            className="w-14 h-14 p-2 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#F5F7FF" }}
          >
            <div
              className="w-10 h-10 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#E0E6FF" }}
            >
              <div color="#0025CC" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="20"
                  height="20"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    id="Vector"
                    d="M9 9.46H15"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M12 15V9.46"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M5 7V17"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_4"
                    d="M19 17V7"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_5"
                    d="M5.5 7H4.5C4.10218 7 3.72064 6.84196 3.43934 6.56066C3.15804 6.27936 3 5.89782 3 5.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H5.5C5.89782 3 6.27936 3.15804 6.56066 3.43934C6.84196 3.72064 7 4.10218 7 4.5V5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7Z"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_6"
                    d="M7 19H17"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_7"
                    d="M17 5H7"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_8"
                    d="M19.5 7H18.5C18.1022 7 17.7206 6.84196 17.4393 6.56066C17.158 6.27936 17 5.89782 17 5.5V4.5C17 4.10218 17.158 3.72064 17.4393 3.43934C17.7206 3.15804 18.1022 3 18.5 3H19.5C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72064 21 4.10218 21 4.5V5.5C21 5.89782 20.842 6.27936 20.5607 6.56066C20.2794 6.84196 19.8978 7 19.5 7Z"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_9"
                    d="M5.5 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V18.5C3 18.1022 3.15804 17.7206 3.43934 17.4393C3.72064 17.158 4.10218 17 4.5 17H5.5C5.89782 17 6.27936 17.158 6.56066 17.4393C6.84196 17.7206 7 18.1022 7 18.5V19.5C7 19.8978 6.84196 20.2794 6.56066 20.5607C6.27936 20.842 5.89782 21 5.5 21Z"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_10"
                    d="M19.5 21H18.5C18.1022 21 17.7206 20.842 17.4393 20.5607C17.158 20.2794 17 19.8978 17 19.5V18.5C17 18.1022 17.158 17.7206 17.4393 17.4393C17.7206 17.158 18.1022 17 18.5 17H19.5C19.8978 17 20.2794 17.158 20.5607 17.4393C20.842 17.7206 21 18.1022 21 18.5V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21Z"
                    stroke="#0025CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="lg:text-[32px] lg:mt-10 mt-6 sm+:text-2xl text-xl font-semibold text-start">
            Ручная доработка выреза
          </h3>
          <p className="lg:text-base text-sm sm+:text-[16px] mt-4 lg:text-start sm+:text-center">
            Если вы не в восторге от результата удаления фона с помощью
            искусственного интеллекта? Нет проблем. Наш инструмент позволяет вам
            ручным образом отредактировать вырез. После того, как алгоритм
            искусственного интеллекта стирает фон изображения, выберите
            Редактировать вырез, где вы можете использовать кисть, чтобы
            покрасить любые оставшиеся области, требующие удаления фона. Вы
            также можете переключить кисть в режим восстановления, чтобы
            нарисовать обратно исходный фон в любой области, где слишком много
            было стерто. Получите идеальный вырез с самыми сложными снимками,
            которые искусственный интеллект не может полностью обработать
            автоматически.
          </p>
          <button
            className="font-semibold mt-8 flex items-center justify-center"
            style={{ color: "#0025CC" }}
            onClick={handleBtnClick}
          >
            <span className="inline-block align-middle">
              <p className="text-[18px] leading-[26px] font-semibold">
                Попробуй
              </p>
            </span>
            <div
              size="29"
              color="#0025CC"
              mode="outline"
              className="text-center ml-1 align-middle inline-block"
            >
              <svg
                className="ml-1 align-middle inline-block"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#0025CC"
              >
                <path
                  d="M41.9999 24H5.99994"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M30 12L42 24L30 36"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center text-base-content-primary">
        <img
          src="https://assets.remove-bg.ai/images/remove-bg/make_img_bg_transparent.webp"
          alt="сделать фон прозрачным"
          className="lg:order-2 lg:max-w-[528px] w-[696px] lg:w-full lg:rounded-2xl mb-4"
        />
        <div className="lg:pr-20 lg:mt-4 mt-8 flex justify-start flex-col lg:items-start items-center">
          <div
            className="w-14 h-14 p-2 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#F6FDFA" }}
          >
            <div
              className="w-10 h-10 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#E5FAF0" }}
            >
              <div color="#20A663" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    id="Vector"
                    d="M21 13V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3H11"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M19 9L15 5"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M13.3 8.00001L17.706 3.60001C17.8831 3.42247 18.0936 3.28161 18.3252 3.1855C18.5569 3.08939 18.8052 3.03992 19.056 3.03992C19.3068 3.03992 19.5551 3.08939 19.7868 3.1855C20.0184 3.28161 20.2289 3.42247 20.406 3.60001C20.5834 3.77722 20.7242 3.98766 20.8202 4.2193C20.9162 4.45095 20.9657 4.69925 20.9657 4.95001C20.9657 5.20078 20.9162 5.44908 20.8202 5.68072C20.7242 5.91237 20.5834 6.12281 20.406 6.30001L16 10.7C14.473 12.219 12.755 11.25 12 12C12.748 11.248 11.779 9.53201 13.3 8.00001Z"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_4"
                    d="M6 12H7.5"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_5"
                    d="M8.64008 9.01L7.58008 7.94"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_6"
                    d="M16.0502 16.43L14.9902 15.37"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_7"
                    d="M7.58008 16.06L8.64008 14.99"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_8"
                    d="M11.6191 18V16.5"
                    stroke="#20A663"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="lg:text-[32px] lg:mt-10 mt-6 sm+:text-2xl text-xl font-semibold lg:text-start text-center">
            Сделать фон изображения прозрачным или полностью закрасить другим
            цветом
          </h3>
          <p className="lg:text-base text-sm sm+:text-[16px] mt-4 lg:text-start sm+:text-center">
            Вырежьте фон изображения полностью и эффективно. Усовершенствованные
            алгоритмы искусственного интеллекта Remove-bg.ai позволяют
            автоматически определять границы за считанные секунды. Теперь с
            вашим новым изображением без фона вы можете безопасно помещать его
            на другие фотографии или добавлять новые элементы в саму картину!
          </p>
          <button
            className="font-semibold mt-8 flex items-center justify-center"
            style={{ color: "#20A663" }}
            onClick={handleBtnClick}
          >
            <span className="inline-block align-middle">
              <p className="text-[18px] leading-[26px] font-semibold">
                Попробуй
              </p>
            </span>
            <div
              size="29"
              color="#20A663"
              mode="outline"
              className="text-center ml-1 align-middle inline-block"
            >
              <svg
                className="inline-block align-middle ml-1"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#20A663"
              >
                <path
                  d="M41.9999 24H5.99994"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M30 12L42 24L30 36"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center text-base-content-primary">
        <img
          src="https://assets.remove-bg.ai/images/remove-bg/100_templates.webp"
          alt="Заменить фон другими шаблонами"
          className="lg:max-w-[528px] w-[696px] lg:w-full lg:rounded-2xl mb-4"
        />
        <div className="lg:pl-20 lg:mt-4 mt-8 flex justify-start flex-col lg:items-start items-center">
          <div
            className="w-14 h-14 p-2 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#FAF5FF" }}
          >
            <div
              className="w-10 h-10 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#F0E0FF" }}
            >
              <div color="#A647FF" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    id="Vector"
                    d="M7.58016 17C7.55101 17.461 7.68228 17.9178 7.9517 18.2929C8.22111 18.6681 8.61206 18.9384 9.05816 19.058L16.0482 20.931C16.5604 21.0682 17.1062 20.9963 17.5654 20.7311C18.0247 20.4659 18.3598 20.0292 18.4972 19.517L20.9302 10.437C20.9982 10.1833 21.0156 9.91867 20.9814 9.65823C20.9472 9.39778 20.862 9.14663 20.7307 8.91912C20.5994 8.69161 20.4245 8.4922 20.2161 8.33226C20.0077 8.17233 19.7699 8.05502 19.5162 7.98702L14.2362 6.57202"
                    stroke="#A647FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M3 5V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H12.237C12.7674 17 13.2761 16.7893 13.6512 16.4142C14.0263 16.0391 14.237 15.5304 14.237 15V5C14.237 4.46957 14.0263 3.96086 13.6512 3.58579C13.2761 3.21071 12.7674 3 12.237 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5Z"
                    stroke="#A647FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="lg:text-[32px] lg:mt-10 mt-6 sm+:text-2xl text-xl font-semibold lg:text-start text-center">
            100+ шаблонов для замены стертого фона
          </h3>
          <p className="lg:text-base text-sm sm+:text-[16px] mt-4 lg:text-start sm+:text-center">
            Мы подготовили библиотеку фоновых шаблонов в ожидании ваших
            потребностей. Будь то продукт, селфи или домашняя фотография, у нас
            есть и будет обновлять больше готовых фонов, чтобы еще больше
            облегчить ваши проблемы с дизайном. Наряду с шаблонами , мы также
            предоставляем различные инструменты, которые должны помочь вам легче
            ориентироваться.
          </p>
          <button
            className="font-semibold mt-8 flex items-center justify-center mb-10"
            style={{ color: "#A647FF" }}
            onClick={handleBtnClick}
          >
            <span className="inline-block align-middle">
              <p className="text-[18px] leading-[26px] font-semibold">
                Попробуй
              </p>
            </span>
            <div
              size="29"
              color="#A647FF"
              mode="outline"
              className="text-center ml-1 align-middle inline-block"
            >
              <svg
                className="inline-block align-middle ml-1"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#A647FF"
              >
                <path
                  d="M41.9999 24H5.99994"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M30 12L42 24L30 36"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Background;
