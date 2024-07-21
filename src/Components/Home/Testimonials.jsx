import React, { useRef } from "react";
import Slider from "react-slick";
import Feedback1 from "../people/Feedback1";
import Feedback2 from "../people/Feedback2";
import Feedback3 from "../people/Feedback3";
import Feedback4 from "../people/Feedback4";
import Feedback5 from "../people/Feedback5";
import Feedback6 from "../people/Feedback6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const testimonials = [
    <Feedback1 key="1" />,
    <Feedback2 key="2" />,
    <Feedback3 key="3" />,
    <Feedback4 key="4" />,
    <Feedback5 key="5" />,
    <Feedback6 key="6" />,
  ];

  return (
    <div className="container-8 bg-white lg:pt-24 pt-12 pb-24">
      <div>
        <p className="font-semibold text-[18px] leading-[22px] text-blue-600">
          Отзыв
        </p>
      </div>
      <div className="flex justify-start w-full mt-3">
        <p className="H30B lg:H48B lg:w-[618px]">
          Что говорят пользователи о Remove-BG.AI
        </p>
        <div className="lg:flex lg:gap-4 lg:justify-end lg:flex-auto lg:mt-[170px] hidden ">
          <div
            className="cursor-pointer active:bg-black active:text-white bg-white text-neutral-ink-500 w-11 h-11 flex justify-center items-center rounded-full border border-neutral-ink-200"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <div className="text-center">
              <svg
                className="inline-block align-middle"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5.79889 24H41.7989"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17.7988 36L5.79883 24L17.7988 12"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="cursor-pointer active:bg-black active:text-white text-neutral-ink-500 bg-white w-11 h-11 flex justify-center items-center rounded-full border border-neutral-ink-200"
            onClick={() => sliderRef.current.slickNext()}
          >
            <div className="text-center">
              <svg
                className="inline-block align-middle"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
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
          </div>
        </div>
      </div>
      <div className="lg:mt-[-45px] mt-5 flex items-center">
        <p className="font-normal text-[20px] leading-[30px] inline-block">
          4,9/5
        </p>
        <div
          size="26"
          color="black"
          mode="outline"
          className="text-center inline-block ml-1"
        >
          <svg
            className="inline-block align-middle ml-1"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              id="Vector"
              d="M2.54379 11.5035C2.44754 11.4335 2.37558 11.3351 2.33793 11.2222C2.30028 
              11.1092 2.29884 10.9873 2.33379 10.8735L2.42712 10.5819C2.46043 10.4693 2.52756 
              10.3698 2.6194 10.2968C2.71123 10.2237 2.82333 10.1807 2.94046 10.1735L10.3955 
              9.57853L13.2538 2.70687C13.3005 2.58955 13.3834 2.49014 13.4903 2.42303C13.5973 
              2.35591 13.7228 2.32457 13.8488 2.33353H14.1521C14.271 2.33101 14.3877 2.36562 
              14.486 2.43253C14.5843 2.49945 14.6592 2.59534 14.7005 2.70687L17.5705 9.57853L25.0255 
              10.1735C25.1426 10.1807 25.2547 10.2237 25.3465 10.2968C25.4383 10.3698 25.5055 
              10.4693 25.5388 10.5819L25.6321 10.8735C25.6709 10.9838 25.6749 11.1034 25.6436 
              11.216C25.6123 11.3287 25.5472 11.429 25.4571 11.5035L19.8338 16.3335L21.5605 
              23.5785C21.5883 23.692 21.5821 23.8111 21.5427 23.9211C21.5033 24.031 21.4324 
              24.1269 21.3388 24.1969L21.0005 24.3835C20.904 24.4487 20.7902 24.4836 20.6738 
              24.4836C20.5574 24.4836 20.4436 24.4487 20.3471 24.3835L14.0005 20.5335L7.61879 
              24.4185C7.52233 24.4837 7.40856 24.5186 7.29212 24.5186C7.17569 24.5186 7.06192 
              24.4837 6.96546 24.4185L6.70879 24.2435C6.61523 24.1736 6.54431 24.0777 6.5049 
              23.9677C6.46548 23.8578 6.4593 23.7386 6.48712 23.6252L8.16712 16.3335L2.54379 11.5035Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-2">
        <p className="font-normal lg:text-[20px] text-[16px] leading-[24px] mb-4 text-neutral-ink-500">
          На основе 179 рейтингов
        </p>
      </div>
      <div className="relative lg:mt-14">
        <Slider ref={sliderRef} {...settings}>
          {testimonials}
        </Slider>
      </div>
      <div className="lg:hidden gap-3 flex justify-center mt-10 mb-20">
          <div
            className="cursor-pointer active:bg-black active:text-white text-neutral-ink-500 bg-white w-11 h-11 flex justify-center items-center rounded-full border border-neutral-ink-200"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <div className="text-center">
              <svg
                className="inline-block align-middle"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5.79889 24H41.7989"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17.7988 36L5.79883 24L17.7988 12"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="cursor-pointer active:bg-black active:text-white text-neutral-ink-500 bg-white w-11 h-11 flex justify-center items-center rounded-full border border-neutral-ink-200"
            onClick={() => sliderRef.current.slickNext()}
          >
            <div className="text-center">
              <svg
                className="inline-block align-middle"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
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
          </div>
        </div>
    </div>
  );
}

export default Testimonials;
