import { useEffect, useState } from "react";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const first = () =>
    setCurr((curr) => {
      if (curr === 0) {
        return slides[0];
      } else if (curr === slides.length - 2) {
        return curr - 1;
      } else {
        return curr - 2;
      }
    });
  const second = () =>
    setCurr((curr) => {
      if (curr === 1) {
        return slides[1];
      } else if (curr === slides.length - 3) {
        return curr + 1;
      } else {
        return curr - 1;
      }
    });
  const third = () =>
    setCurr((curr) => {
      if (curr === 2) {
        return slides[2];
      } else if (curr === slides.length - 3) {
        return curr + 2;
      } else {
        return curr + 1;
      }
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="container-8 lg:mt-14 mt-8 flex flex-col lg:flex-row lg:gap-24 gap-12 items-center">
      <div className="flex flex-col lg:max-w-lg max-w-3xl lg:gap-10 gap-6 items-start justify-start order-2 lg:order-1">
        <div className="flex gap-10 hover:shadow-md rounded-lg cursor-pointer">
          <div className="flex gap-4">
            <div
              className="w-14 h-14 p-2 rounded-full"
              style={{ backgroundColor: "#F8F6FE" }}
            >
              <div
                style={{ backgroundColor: "#E9E0FF" }}
                className="w-10 h-10 rounded-[50%] flex flex-auto justify-center items-center"
              >
                <div
                  color="#6420F2"
                  mode="outline"
                  className="text-center flex justify-center items-center p-0 m-0"
                >
                  <svg
                    className="flex align-middle justify-center items-center p-0 m-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6420F2"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17 8L12 3L7 8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 3V15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              onClick={first}
              className="flex flex-col gap-3 w-full mt-2 border-b border-b-neutral-ink-100 lg:pb-6 pb-4 relative"
            >
              <p className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
                Загрузите изображение, чтобы удалить фон
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500">
                Нажмите Загрузить или перетащите нужное изображение в окно
                загрузки.
              </p>
              <div
                className={`${
                  curr === 0 ? "" : "hidden"
                } h-[2px] w-[154px] bg-[#1D2939] z-10 absolute bottom-0 left-0`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 hover:shadow-md rounded-lg cursor-pointer">
          <div className="flex gap-4">
            <div
              className="w-14 h-14 p-2 rounded-full"
              style={{ backgroundColor: "#F6FAFE" }}
            >
              <div
                style={{ backgroundColor: "#DCE9FA" }}
                className="w-10 h-10 rounded-[50%] flex flex-auto justify-center items-center"
              >
                <div
                  color="#2068F1"
                  mode="outline"
                  className="text-center flex justify-center items-center p-0 m-0"
                >
                  <svg
                    className="inline-block align-middle justify-center items-center p-0 m-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2068F1"
                  >
                    <path
                      d="M7.52621 19.977H8.93321C9.4636 19.9769 9.97223 19.7661 10.3472 19.391L19.0712 10.667C19.4462 
                                            10.292 19.6568 9.78337 19.6568 9.25304C19.6568 8.72271 19.4462 8.2141 19.0712 7.83904L15.7722 
                                            4.54004C15.3972 4.1651 14.8885 3.95447 14.3582 3.95447C13.8279 3.95447 13.3193 4.1651 12.9442 
                                            4.54004L3.51721 13.967C3.14227 14.3421 2.93164 14.8507 2.93164 15.381C2.93164 15.9114 3.14227 
                                            16.42 3.51721 16.795L6.11321 19.391C6.48721 19.766 6.99521 19.977 7.52621 19.977Z"
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
            <div
              onClick={second}
              className="flex flex-col gap-3 w-full mt-2 border-b border-b-neutral-ink-100 tlg:pb-6 pb-4 relative"
            >
              <p className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
                Удалить и изменить фон
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500">
                Remove-bg.AI автоматически
                <a href="/ru">
                  <b> Удалить фон онлайн</b>
                </a>
                , удалит логотип bg с вашего изображения через несколько секунд.
                Вы можете отредактировать фон фото, изменив его, сделав
                прозрачным или наложив на него новый цветной фон.
              </p>
              <div
                className={`${
                  curr === 1 ? "" : "hidden"
                } h-[2px] w-[154px] bg-[#1D2939] z-10 absolute bottom-0 left-0`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 hover:shadow-md rounded-lg cursor-pointer">
          <div className="flex gap-4">
            <div
              className="w-14 h-14 p-2 rounded-full"
              style={{ backgroundColor: "#FDF7F7" }}
            >
              <div
                style={{ backgroundColor: "#FFE0E0" }}
                className="w-10 h-10 rounded-[50%] flex flex-auto justify-center items-center"
              >
                <div
                  color="#D73E43"
                  mode="outline"
                  className="sc-grXZZQ IEGwA text-center flex justify-center items-center p-0 m-0"
                >
                  <svg
                    className="inline-block align-middle justify-center items-center p-0 m-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D73E43"
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
                      d="M15.3148 14.918H13.4668V9.37305H15.3148C16.3358 9.37305 17.1628 10.201 17.1628 11.221V13.069C17.1629 13.3118 17.1152 
                                        13.5522 17.0224 13.7766C16.9296 14.0009 16.7935 14.2047 16.6219 14.3764C16.4503 14.5481 16.2465 14.6843 16.0222 14.7773C15.798 
                                        14.8702 15.5576 14.918 15.3148 14.918Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7C3 5.93913 3.42143 4.92172 4.17157 
                                        4.17157C4.92172 3.42143 5.93913 3 7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V17C21 18.0609 
                                        20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              onClick={third}
              className="flex flex-col gap-3 w-full mt-2 border-b border-b-neutral-ink-100 lg:pb-6 pb-4 relative"
            >
              <p className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
                Скачать в HD
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500">
                Довольны вашим новым фотофоном? Загрузите его в HD-качестве с
                изображениями разного размера.
              </p>
              <div
                className={`${
                  curr === 2 ? "" : "hidden"
                } h-[2px] w-[154px] bg-[#1D2939] z-10 absolute bottom-0 left-0`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:order-2 flex flex-col justify-center items-center lg:w-1/2 w-full">
        <div className="lg:grid lg:gap-9 grid-cols-1">
          <div
            className="overflow-hidden relative"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
