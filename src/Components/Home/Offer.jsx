import React from "react";
import { useFile } from "../helpages/UseFile";

function Offer() {
  const { fileInput, handleBtnClick, handleFileChange } = useFile();

  return (
    <div className="container-8 bg-white lg:pt-24 pt-9">
      <div className="flex justify-center w-full">
        <p className="H30B lg:H48B lg:w-[768px] text-center">
          Что Remove-bg.ai предлагает пользователям:
        </p>
      </div>
      <ul className="lg:mb-14 mb-10 space-y-10 lg:space-y-0 lg:pt-16 pt-12 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
        <li className="space-x-5 flex flex-col lg:space-x-6 items-center">
          <div className="w-14 h-14 p-2 rounded-full bg-[#F6FAFE]">
            <div className="w-10 h-10 justify-center flex items-center rounded-full bg-[#CCCEFF]">
              <div color="#0A13F6" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="#0A13F6"
                >
                  <path
                    d="M7.52621 19.977H8.93321C9.4636 19.9769 9.97223 19.7661 10.3472 19.391L19.0712 10.667C19.4462 
                                10.292 19.6568 9.78337 19.6568 9.25304C19.6568 8.72271 19.4462 8.2141 19.0712 7.83904L15.7722 4.54004C15.3972 
                                4.1651 14.8885 3.95447 14.3582 3.95447C13.8279 3.95447 13.3193 4.1651 12.9442 4.54004L3.51721 13.967C3.14227 
                                14.3421 2.93164 14.8507 2.93164 15.381C2.93164 15.9114 3.14227 16.42 3.51721 16.795L6.11321 19.391C6.48721 
                                19.766 6.99521 19.977 7.52621 19.977Z"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.08984 9.39001L14.2198 15.52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20.9997 19.98H8.92969"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-5 flex items-center flex-col text-center">
            <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
              Удалить изображение bg онлайн - бесплатно
            </h3>
            <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500 text-center">
              Надеясь сделать процесс проектирования менее дорогостоящим и
              неэффективным, наше приложение для удаления фона можно
              использовать бесплатно и оно доступно любому пользователю по всему
              миру. Вам даже не нужна учетная запись.
            </p>
          </div>
        </li>
        <li className="space-x-5 flex flex-col lg:space-x-6 items-center">
          <div className="w-14 h-14 p-2 rounded-full  bg-[#F6FAFE]">
            <div className="w-10 h-10 justify-center flex items-center rounded-full bg-[#CCCEFF]">
              <div color="#0A13F6" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="21"
                  height="21"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    id="Vector"
                    d="M19.9957 21.0351L21.5357 19.495C21.8536 19.1771 21.8536 18.6617 21.5357 18.3438L10.157 
                    6.96509C9.83909 6.6472 9.3237 6.6472 9.00581 6.96509L7.46573 8.50516C7.14785 8.82305 7.14785 
                    9.33845 7.46573 9.65633L18.8445 21.0351C19.1624 21.353 19.6778 21.353 19.9957 21.0351Z"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M16.5 4V6"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M17.5 5H15.5"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_4"
                    d="M5.5 15V17"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_5"
                    d="M6.5 16H4.5"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_6"
                    d="M4.5 3V5"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_7"
                    d="M5.5 4H3.5"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_8"
                    d="M9.33984 11.5301L12.0298 8.84009"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-5 flex items-center flex-col text-center">
            <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
              Удалите bg бесплатно и отредактируйте изображение одним простым
              инструментом
            </h3>
            <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500 text-center">
              Remove-bg.ai позволяет пользователям добавлять новые изображения
              или объекты к своим существующим фотографиям среди множества
              других инструментов. Пользователи могут быстро накладывать друг на
              друга различные элементы, создавая уникальные композиции или
              разрабатывая совершенно новые сцены. С помощью Remove-bg.ai,
              создание желаемого визуального результата всего за несколько
              кликов!
            </p>
          </div>
        </li>
        <li className="space-x-5 flex flex-col lg:space-x-6 items-center">
          <div className="w-14 h-14 p-2 rounded-full bg-[#F6FAFE]">
            <div className="w-10 h-10 justify-center flex items-center rounded-full bg-[#CCCEFF]">
              <div color="#0A13F6" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="21"
                  height="21"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    id="Vector"
                    d="M12.177 7.32296C12.2119 7.35795 12.2356 7.40249 12.2452 7.45097C12.2548 7.49945 12.2498 7.54968 12.2309 7.59533C12.212 7.64097 12.1799 7.67998 12.1388 7.70742C12.0977 7.73487 12.0494 7.74951 12 7.74951C11.9506 7.74951 11.9023 7.73487 11.8612 7.70742C11.8201 7.67998 11.788 7.64097 11.7691 7.59533C11.7502 7.54968 11.7452 7.49945 11.7548 7.45097C11.7644 7.40249 11.7881 7.35795 11.823 7.32296C11.8462 7.29968 11.8738 7.28121 11.9042 7.2686C11.9346 7.256 11.9671 7.24951 12 7.24951C12.0329 7.24951 12.0654 7.256 12.0958 7.2686C12.1262 7.28121 12.1538 7.29968 12.177 7.32296Z"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M21.4996 8.53003C20.4363 8.36664 19.3502 8.43614 18.3165 8.73374C17.2827 9.03134 16.3259 9.54993 15.5122 10.2537C14.6986 10.9574 14.0475 11.8294 13.604 12.8095C13.1605 13.7896 12.9352 14.8543 12.9436 15.93C12.9466 16.288 12.9756 16.646 13.0296 17"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M7.5 7H6.5C5.70435 7 4.94129 7.31607 4.37868 7.87868C3.81607 8.44129 3.5 9.20435 3.5 10V18C3.5 18.7956 3.81607 19.5587 4.37868 20.1213C4.94129 20.6839 5.70435 21 6.5 21H14.5C15.2956 21 16.0587 20.6839 16.6213 20.1213C17.1839 19.5587 17.5 18.7956 17.5 18V17"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_4"
                    d="M18.5 3H10.5C9.70435 3 8.94129 3.31607 8.37868 3.87868C7.81607 4.44129 7.5 5.20435 7.5 6V14C7.5 14.7956 7.81607 15.5587 8.37868 16.1213C8.94129 16.6839 9.70435 17 10.5 17H18.5C19.2956 17 20.0587 16.6839 20.6213 16.1213C21.1839 15.5587 21.5 14.7956 21.5 14V6C21.5 5.20435 21.1839 4.44129 20.6213 3.87868C20.0587 3.31607 19.2956 3 18.5 3Z"
                    stroke="#0A13F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-5 flex items-center flex-col text-center">
            <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
              Работает со всеми распространенными типами файлов
            </h3>
            <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500 text-center">
              Наше приложение поддерживает ластик bg для PNG, JPG и большинства
              других типов файлов изображений. Нет совместимости вопросы
            </p>
          </div>
        </li>
        <li className="space-x-5 flex flex-col lg:space-x-6 items-center">
          <div className="w-14 h-14 p-2 rounded-full  bg-[#F6FAFE]">
            <div className="w-10 h-10 justify-center flex items-center rounded-full bg-[#CCCEFF]">
              <div color="#0A13F6" mode="outline" className="text-center">
                <svg
                  className="inline-block align-middle"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A13F6"
                >
                  <path
                    d="M7 9.37V14.92"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7 12.15H10.69"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.6895 9.37V14.92"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.3148 14.918H13.4668V9.37305H15.3148C16.3358 9.37305 17.1628 10.201 17.1628 11.221V13.069C17.1629 13.3118 17.1152 13.5522 17.0224 13.7766C16.9296 14.0009 16.7935 14.2047 16.6219 14.3764C16.4503 14.5481 16.2465 14.6843 16.0222 14.7773C15.798 14.8702 15.5576 14.918 15.3148 14.918Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-5 flex items-center flex-col text-center">
            <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
              Сохраняет HD-качество изображений после удаления фона:
            </h3>
            <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500 text-center">
              Remove BG обещает предоставить высококачественные результаты. Мы
              сохраняем качество вашего исходного изображения, никаких
              искажений, никаких недостающих рук или ушей.
            </p>
          </div>
        </li>
      </ul>
      <div className="text-center">
        <div className="h-14 px-10 w-auto inline-flex justify-center items-center py-5 border border-[#01DBAF] rounded-[100px]">
          <button
            className="font-semibold text-[16px] leading-[20px] text-blue-600"
            onClick={handleBtnClick}
          >
            <span className="inline-block align-middle">
              <p className="text-[18px] leading-[26px] font-semibold">
                Попробуй
              </p>
            </span>
            <div
              size="29"
              color="inherit"
              mode="outline"
              className="text-center ml-1 align-middle inline-block"
            >
              <svg
                className="inline-block align-middle ml-1"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#0c1fbd"
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

export default Offer;
