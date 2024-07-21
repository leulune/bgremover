import React, { useState } from "react";
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [getHome, setGetHome] = useState(<Home/>);
  const navigate = useNavigate();

  const handleClick = () => {
    setGetHome(!getHome);
    navigate('/');
  }

  return (
    <nav
      className="fixed z-40 left-0 top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-50 bg-white px-2 lg:px-6 h-[68px] shadow-md justify-between"
      id="nav"
    >
      <div className="flex items-center justify-around flex-auto h-full">
        <div className="container-8 flex justify-between h-full sm+:mr-0 sm+:max-w-[1010px] sm+:px-5">
          <div className="flex gap-4 h-full items-center">
            {/*Логотип*/}
            <button onClick={handleClick} aria-label="Logo" className="inline-flex">
              <div className="inline-block w-36" width="139" height="32">
                <svg
                  width="890"
                  height="184"
                  viewBox="0 0 890 184"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "139", height: "32" }}
                >
                  <path
                    d="M30.08 152V40H80.48C87.6267 40 94.08 41.5467 99.84 44.64C105.707 47.7333 110.293 52 113.6 57.44C116.907 62.7733 118.56 68.8533 118.56 75.68C118.56 82.72 116.907 89.0667 113.6 94.72C110.293 100.267 105.76 104.64 100 107.84C94.24 111.04 87.7333 112.64 80.48 112.64H56V152H30.08ZM92.16 
                      152L63.68 101.44L91.52 97.44L123.2 152H92.16ZM56 91.84H78.08C80.8533 91.84 83.2533 91.2533 85.28 90.08C87.4133 88.8 89.0133 87.04 90.08 84.8C91.2533 82.56 91.84 80 91.84 77.12C91.84 74.24 91.2 71.7333 89.92 69.6C88.64 67.36 86.7733 65.6533 84.32 64.48C81.9733 63.3067 79.0933 62.72 75.68 
                      62.72H56V91.84ZM167.459 153.6C158.072 153.6 149.912 151.733 142.979 148C136.045 144.16 130.659 138.987 126.819 132.48C122.979 125.867 121.059 118.347 121.059 109.92C121.059 103.413 122.125 97.44 124.259 92C126.392 86.56 129.379 81.8667 133.219 77.92C137.059 73.8667 141.592 70.7733 146.819 
                      68.64C152.152 66.4 157.965 65.28 164.259 65.28C170.232 65.28 175.672 66.3467 180.579 68.48C185.592 70.6133 189.912 73.6 193.539 77.44C197.165 81.28 199.939 85.8133 201.859 91.04C203.779 96.2667 204.632 101.973 204.419 108.16L204.259 115.04H136.579L132.899 100.64H183.459L180.739 103.68V100.48C180.525 
                      97.8133 179.672 95.4667 178.179 93.44C176.792 91.3067 174.925 89.6533 172.579 88.48C170.232 87.3067 167.565 86.72 164.579 86.72C160.419 86.72 156.845 87.5733 153.859 89.28C150.979 90.88 148.792 93.28 147.299 96.48C145.805 99.5733 145.059 103.413 145.059 108C145.059 112.693 146.019 116.8 147.939 120.32C149.965 
                      123.733 152.845 126.4 156.579 128.32C160.419 130.24 164.952 131.2 170.179 131.2C173.805 131.2 177.005 130.667 179.779 129.6C182.659 128.533 185.752 126.72 189.059 124.16L201.059 141.12C197.752 144 194.232 146.347 190.499 148.16C186.765 149.973 182.925 151.307 178.979 152.16C175.139 153.12 171.299 153.6 167.459 
                      153.6ZM210.969 152V67.04H235.289L236.089 82.4L232.729 82.56C234.009 79.7867 235.609 77.3333 237.529 75.2C239.555 73.0667 241.795 71.3067 244.249 69.92C246.809 68.4267 249.422 67.3067 252.089 66.56C254.862 65.8133 257.635 65.44 260.409 65.44C264.569 65.44 268.355 66.08 271.769 67.36C275.182 68.64 278.169 70.72 280.729 
                      73.6C283.289 76.3733 285.315 80.16 286.809 84.96L282.809 84.64L284.089 82.08C285.475 79.52 287.235 77.2267 289.369 75.2C291.609 73.0667 294.062 71.3067 296.729 69.92C299.395 68.4267 302.169 67.3067 305.049 66.56C307.929 65.8133 310.702 65.44 313.369 65.44C320.089 65.44 325.689 66.7733 330.169 69.44C334.649 72 338.009 
                      75.8933 340.249 81.12C342.595 86.3467 343.769 92.6933 343.769 100.16V152H318.009V102.24C318.009 98.8267 317.529 96 316.569 93.76C315.609 91.52 314.169 89.8667 312.249 88.8C310.435 87.6267 308.142 87.04 305.369 87.04C303.129 87.04 301.049 87.4133 299.129 88.16C297.315 88.9067 295.715 89.92 294.329 91.2C293.049 92.48 292.035 
                      93.9733 291.289 95.68C290.542 97.3867 290.169 99.3067 290.169 101.44V152H264.409V102.08C264.409 98.88 263.929 96.16 262.969 93.92C262.009 91.68 260.569 89.9733 258.649 88.8C256.729 87.6267 254.489 87.04 251.929 87.04C249.689 87.04 247.609 87.4133 245.689 88.16C243.875 88.9067 242.275 89.92 240.889 91.2C239.609 92.48 238.595 
                      93.9733 237.849 95.68C237.102 97.3867 236.729 99.2533 236.729 101.28V152H210.969ZM395.435 153.6C386.582 153.6 378.688 151.68 371.755 147.84C364.928 144 359.488 138.773 355.435 132.16C351.488 125.547 349.515 117.973 349.515 109.44C349.515 100.907 351.488 93.3333 355.435 86.72C359.488 80.1067 364.928 74.88 371.755 71.04C378.688 67.2 
                      386.582 65.28 395.435 65.28C404.288 65.28 412.128 67.2 418.955 71.04C425.888 74.88 431.328 80.1067 435.275 86.72C439.222 93.3333 441.195 100.907 441.195 109.44C441.195 117.973 439.222 125.547 435.275 132.16C431.328 138.773 425.888 144 418.955 147.84C412.128 151.68 404.288 153.6 395.435 153.6ZM395.435 131.52C399.275 131.52 402.688 130.56 
                      405.675 128.64C408.662 126.72 411.008 124.107 412.715 120.8C414.422 117.493 415.222 113.707 415.115 109.44C415.222 105.173 414.422 101.387 412.715 98.08C411.008 94.6667 408.662 92 405.675 90.08C402.688 88.16 399.275 87.2 395.435 87.2C391.595 87.2 388.128 88.16 385.035 90.08C382.048 92 379.702 94.6667 377.995 98.08C376.288 101.387 375.488 105.173 375.595 
                      109.44C375.488 113.707 376.288 117.493 377.995 120.8C379.702 124.107 382.048 126.72 385.035 128.64C388.128 130.56 391.595 131.52 395.435 131.52ZM472.071 152L436.551 67.04H464.871L485.991 130.56L479.751 131.2L501.511 67.04H529.511L492.231 152H472.071ZM571.403 153.6C562.016 153.6 553.856 151.733 546.923 148C539.989 144.16 534.603 138.987 530.763 132.48C526.923 125.867 525.003 
                      118.347 525.003 109.92C525.003 103.413 526.069 97.44 528.203 92C530.336 86.56 533.323 81.8667 537.163 77.92C541.003 73.8667 545.536 70.7733 550.763 68.64C556.096 66.4 561.909 65.28 568.203 65.28C574.176 65.28 579.616 66.3467 584.523 68.48C589.536 70.6133 593.856 73.6 597.483 77.44C601.109 81.28 603.883 85.8133 605.803 91.04C607.723 96.2667 608.576 101.973 608.363 108.16L608.203 
                      115.04H540.523L536.843 100.64H587.403L584.683 103.68V100.48C584.469 97.8133 583.616 95.4667 582.123 93.44C580.736 91.3067 578.869 89.6533 576.523 88.48C574.176 87.3067 571.509 86.72 568.523 86.72C564.363 86.72 560.789 87.5733 557.803 89.28C554.923 90.88 552.736 93.28 551.243 96.48C549.749 99.5733 549.003 103.413 549.003 108C549.003 112.693 549.963 116.8 551.883 120.32C553.909 123.733 
                      556.789 126.4 560.523 128.32C564.363 130.24 568.896 131.2 574.123 131.2C577.749 131.2 580.949 130.667 583.723 129.6C586.603 128.533 589.696 126.72 593.003 124.16L605.003 141.12C601.696 144 598.176 146.347 594.443 148.16C590.709 149.973 586.869 151.307 582.923 152.16C579.083 153.12 575.243 153.6 571.403 153.6Z"
                    fill="#0007B4"
                  ></path>
                  <rect
                    width="260"
                    height="168"
                    transform="translate(622 8)"
                    fill="#0007B4"
                  ></rect>
                  <path
                    d="M652.08 152V40H701.52C709.2 40 715.707 41.12 721.04 43.36C726.373 45.4933 730.373 48.64 733.04 52.8C735.813 56.8533 737.2 61.76 737.2 67.52C737.2 73.92 735.6 79.3067 732.4 83.68C729.307 88.0533 724.773 90.9867 
                      718.8 92.48L718.48 89.44C723.493 90.5067 727.813 92.3733 731.44 95.04C735.173 97.7067 738.053 101.013 740.08 104.96C742.107 108.8 743.12 113.173 743.12 118.08C743.12 123.733 742.16 128.693 740.24 132.96C738.32 137.12 735.547 140.64 731.92 143.52C728.293 146.4 724.027 148.533 719.12 
                      149.92C714.32 151.307 708.987 152 703.12 152H652.08ZM677.68 129.28H702.16C705.147 129.28 707.653 128.8 709.68 127.84C711.813 126.88 713.467 125.493 714.64 123.68C715.813 121.76 716.4 119.467 716.4 116.8C716.4 114.347 715.76 112.267 714.48 110.56C713.307 108.853 711.6 107.573 709.36 
                      106.72C707.12 105.76 704.453 105.28 701.36 105.28H677.68V129.28ZM677.68 84.96H697.68C700.453 84.96 702.8 84.5333 704.72 83.68C706.747 82.72 708.24 81.44 709.2 79.84C710.267 78.1333 710.8 76.1067 710.8 73.76C710.8 70.3467 709.627 67.68 707.28 65.76C704.933 63.7333 701.413 62.72 696.72 
                      62.72H677.68V84.96ZM806.668 153.6C797.708 153.6 789.601 152.16 782.348 149.28C775.094 146.4 768.854 142.347 763.628 137.12C758.401 131.893 754.401 125.76 751.628 118.72C748.854 111.573 747.468 103.84 747.468 95.52C747.468 87.2 748.908 79.5733 751.788 72.64C754.774 65.6 758.988 59.4667 
                      764.428 54.24C769.868 49.0133 776.268 44.96 783.628 42.08C791.094 39.2 799.201 37.76 807.948 37.76C814.134 37.76 819.948 38.56 825.388 40.16C830.934 41.76 835.948 43.9467 840.428 46.72C844.908 49.4933 848.694 52.6933 851.788 56.32L835.308 73.76C832.641 71.2 829.868 69.0667 826.988 67.36C824.214 
                      65.6533 821.228 64.32 818.028 63.36C814.828 62.2933 811.414 61.76 807.788 61.76C803.094 61.76 798.774 62.6133 794.828 64.32C790.988 66.0267 787.574 68.4267 784.588 71.52C781.708 74.5067 779.468 78.08 777.868 82.24C776.268 86.2933 775.468 90.72 775.468 95.52C775.468 100.32 776.321 104.8 778.028 108.96C779.734 
                      113.12 782.081 116.747 785.068 119.84C788.054 122.827 791.574 125.227 795.628 127.04C799.788 128.747 804.214 129.6 808.908 129.6C812.214 129.6 815.308 129.067 818.188 128C821.174 126.933 823.734 125.493 825.868 123.68C828.001 121.867 829.708 119.733 830.988 117.28C832.268 114.72 832.908 112 832.908 109.12V104.96L836.428 
                      110.4H805.548V89.12H858.188C858.401 90.2933 858.561 91.8933 858.668 93.92C858.774 95.9467 858.828 97.92 858.828 99.84C858.934 101.76 858.988 103.2 858.988 104.16C858.988 111.413 857.654 118.08 854.988 124.16C852.428 130.133 848.801 135.307 844.108 139.68C839.414 144.053 833.868 147.467 827.468 149.92C821.068 152.373 814.134 153.6 806.668 153.6Z"
                    fill="#00EDB4"
                  ></path>
                </svg>
              </div>
            </button>
            {/*кнопка Решение*/}
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button type="button" aria-expanded="false">
                <div className="relative hidden lg:block">
                  <div className="hover:text-neutral-ink-500 px-1 py-1.5 rounded-lg items-center gap-1 justify-center flex">
                    <p className="font-semibold text-[14px] leading-[18px] inline">
                      Решение
                    </p>
                    <div
                      color="inherit"
                      mode="outline"
                      className="text-center group-hover:text-neutral-ink-500"
                    >
                      <svg
                        className="inline-block align-middle group-hover:text-neutral-ink-500"
                        width="22px"
                        height="22px"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        {isHovered ? (
                          <path
                            d="M6 15L12 9L18 15"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        ) : (
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              <div
                className={`absolute left-0 top-9 ${isHovered ? "" : "hidden"}`}
              >
                <div className="h-auto bg-white rounded-2xl shadow flex w-[480px]">
                  <div className="p-2">
                    <a href="/ru/photographer">
                      <button className="self-stretch p-1.5 justify-start items-center gap-2.5 inline-flex relative group w-full">
                        <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                          <div
                            color="inherit"
                            mode="outline"
                            className="text-center"
                          >
                            <svg
                              className="inline-block align-middle group-hover:text-blue-500 transition-all"
                              width="20"
                              height="20"
                              viewBox="0 4 24 22"
                              strokeWidth="1.8"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="group">
                          <div className="text-gray-800 text-left transition-all group-hover:text-blue-500 text-sm font-semibold leading-none">
                            <span>Фотограф</span>
                          </div>
                        </div>
                      </button>
                    </a>

                    <a href="/ru/developer">
                      <button className="self-stretch p-1.5 justify-start items-center gap-2.5 inline-flex relative group w-full">
                        <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex">
                          <div
                            color="inherit"
                            mode="outline"
                            className="sc-grXZZQ hJxhbs text-center"
                          >
                            <svg
                              className="inline-block align-middle group-hover:text-blue-500 transition-all"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              strokeWidth="1.5"
                              stroke="currentColor"
                            >
                              <path
                                d="M11.4823 3.33325L8.51562 16.6666"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M15 6.6665L18.3333 9.99984L15 13.3332"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M4.99935 13.3332L1.66602 9.99984L4.99935 6.6665"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-gray-800 text-left transition-all group-hover:text-blue-500 text-sm font-semibold leading-none">
                          <span>Разработчик</span>
                        </div>
                      </button>
                    </a>

                    <a href="/ru/animal-lovers">
                      <button className="self-stretch p-1.5 justify-start items-center gap-2.5 inline-flex relative group w-full">
                        <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                          <div
                            color="inherit"
                            mode="outline"
                            className="sc-grXZZQ hJxhbs text-center"
                          >
                            <svg
                              className="inline-block align-middle h-5 w-5 text-gray-900 group-hover:text-blue-500 transition-all"
                              enableBackground="new 0 0 64 64"
                              viewBox="0 0 64 64"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              id="animal"
                            >
                              <path
                                d="M60.5,18.8L60.5,18.8C54.6,12.3,44,8.5,32,8.5S9.4,12.3,3.5,18.8c-0.5,0.6-0.7,1.3-0.4,2.1c0.2,0.5,0.3,1.4,0.4,
                                    2.5 c0.5,4,1.4,10.8,6,15.6c0.5,0.5,1.1,0.7,1.8,0.6c0.7-0.1,1.2-0.5,1.5-1.1c0.5-1.1,1.3-3.8,2.2-7.6c0.3,4.1,1.4,9,
                                    3.9,14.5 c0.2,0.4,4.3,9.1,12.9,10.1c0,0,0.1,0,0.1,0s0.1,0,0.1,0c8.6-1,12.7-9.7,12.9-10.1c2.6-5.5,3.7-10.4,3.9-14.5 
                                    c1,3.8,1.7,6.6,2.2,7.6c0.3,0.6,0.9,1,1.5,1.1c0.7,0.1,1.3-0.1,1.8-0.6c4.6-4.8,5.5-11.6,6-15.6c0.1-1.1,0.3-2,0.4-2.5 
                                    C61.1,20.2,61,19.4,60.5,18.8z M58.5,23.1c-0.5,3.8-1.4,10.1-5.5,14.5c-0.5-0.9-1.2-3.9-2.1-7.4c-0.4-1.5-0.8-3.2-1.3-4.9 
                                    c-2.4-9.1-3-9.1-3.9-9.1c-0.5,0-0.9,0.4-1,0.9c-0.1,0.2,0,0.5,0.1,0.7c0.1,0.1,5.9,10.8-1.6,26.7c0,0.1-3.8,8.1-11.2,8.9 
                                    c-7.4-0.9-11.2-8.8-11.2-8.9c-7.4-15.9-1.6-26.6-1.6-26.7c0.1-0.2,0.2-0.5,0.1-0.7c-0.1-0.5-0.5-0.8-1-0.9c0,0-0.1,0-0.1,0 
                                    c-0.8,0-1.4,0.3-3.8,9.1c-0.5,1.7-0.9,3.4-1.3,4.9c-0.9,3.5-1.7,6.5-2.2,7.4c-4.1-4.4-5-10.7-5.5-14.5c-0.2-1.2-0.3-2.2-0.5-2.8 
                                    c0,0,0-0.1,0-0.1c5.5-6.1,15.6-9.7,27-9.7s21.5,3.6,27,9.7c0,0,0,0.1,0,0.1C58.8,20.9,58.7,21.9,58.5,23.1z"
                              ></path>
                              <path
                                d="M23 24.7c-2 0-3.6 1.7-3.6 3.7s1.6 3.7 3.6 3.7 3.6-1.7 3.6-3.7S25 24.7 23 24.7zM23 30.1c-.9 0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 
                                    1.6.8 1.6 1.7S23.9 30.1 23 30.1zM40.6 24.7c-2 0-3.6 1.7-3.6 3.7s1.6 3.7 3.6 3.7 3.6-1.7 3.6-3.7S42.6 24.7 40.6 24.7zM40.6 30.1c-.9 
                                    0-1.6-.8-1.6-1.7s.7-1.7 1.6-1.7 1.6.8 1.6 1.7S41.5 30.1 40.6 30.1zM36.4 49.2c-1.5.4-2.5.4-3 0-.2-.2-.4-.5-.4-.8 0 0 0 0 0-.1 2.2-.5 
                                    3.9-2.6 3.9-5 0-1.5-.6-3.9-5-3.9s-5 2.5-5 3.9c0 2.5 1.7 4.5 4 5 0 0 0 0 0 0 0 .3-.2.6-.4.8-.5.4-1.6.5-3 0-.5-.2-1.1.2-1.2.7-.2.5.2 
                                    1.1.7 1.2.9.3 1.7.4 2.4.4 1.1 0 1.9-.3 2.5-.9 0 0 0 0 .1-.1 0 0 0 0 .1.1 1.1 1 2.7 1.1 4.9.5.5-.2.8-.7.7-1.2C37.5 49.4 37 49.1 36.4 
                                    49.2zM29 43.3c0-.7 0-1.9 3-1.9s3 1.2 3 1.9c0 1.7-1.3 3.1-3 3.1S29 45 29 43.3z"
                                strokeWidth="3"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-gray-800 text-left transition-all group-hover:text-blue-500 text-sm font-semibold leading-none">
                          <span>Любитель животных</span>
                        </div>
                      </button>
                    </a>
                  </div>
                  <div className="p-2">
                    <a href="/ru/ecommerce">
                      <button className="self-stretch p-1.5 justify-start items-center gap-2.5 inline-flex relative group w-full">
                        <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                          <div
                            color="inherit"
                            mode="outline"
                            className="text-center"
                          >
                            <svg
                              className="inline-block align-middle group-hover:text-blue-500 transition-all"
                              width="16"
                              height="19"
                              viewBox="0 0 16 19"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                d="M11.3346 8.33341V5.00008C11.3346 3.15925 9.84214 1.66675 8.0013 1.66675C6.16047 1.66675 4.66797 3.15925 4.66797 5.00008V8.33341"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M13.834 17.5002H2.16732C1.70732 17.5002 1.33398 17.1268 1.33398 16.6668V6.66683C1.33398 6.20683 1.70732 5.8335 2.16732 5.8335H13.834C14.294 5.8335 14.6673 6.20683 14.6673 6.66683V16.6668C14.6673 17.1268 14.294 17.5002 13.834 17.5002Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-gray-800 text-left transition-all group-hover:text-blue-500 text-sm font-semibold leading-none">
                          <span>Электронная коммерция</span>
                        </div>
                      </button>
                    </a>
                    <a href="/ru/marketing">
                      <button className="self-stretch p-1.5 justify-start items-center gap-2.5 inline-flex relative group w-full">
                        <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                          <div
                            color="inherit"
                            mode="outline"
                            className="text-center"
                          >
                            <svg
                              className="inline-block align-middle group-hover:text-blue-500 transition-all"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                d="M15.9852 2.02585C16.671 2.71168 16.671 3.82252 15.9852 4.50835C15.2993 5.19418 14.1885 5.19418 13.5027 4.50835C12.8168 3.82252 12.8168 2.71168 13.5027 2.02585C14.1885 1.34002 15.3002 1.34002 15.9852 2.02585Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M15.6667 8.65664V11.0025C15.6667 12.3066 14.61 13.3633 13.3058 13.3633H9.37083L5.43583 16.5116V13.3633H3.86083C2.55667 13.3633 1.5 12.3066 1.5 11.0025V4.7058C1.5 3.40164 2.55667 2.34497 3.86083 2.34497H9.46667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-gray-800 text-left transition-all group-hover:text-blue-500 text-sm font-semibold leading-none">
                          <span>Маркетинг</span>
                        </div>
                      </button>
                    </a>
                    <a href="/ru/car-dealership">
                      <button className="self-stretch p-1.5 justify-start items-center gap-2.5 inline-flex relative group w-full">
                        <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                          <div
                            color="inherit"
                            mode="outline"
                            className="text-center"
                          >
                            <svg
                              className="inline-block align-middle group-hover:text-blue-500 transition-all"
                              width="20"
                              height="16"
                              viewBox="0 0 20 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                d="M18.3318 5.5L16.1484 6.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3.85768 6.33333L1.66602 5.5L3.85768 6.33333Z"
                                fill="#252638"
                              ></path>
                              <path
                                d="M3.85768 6.33333L1.66602 5.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M15.2083 9.6665H13.125"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M6.87435 9.6665H4.79102"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M16.1488 6.33325L15.4496 2.98992C15.2471 2.02492 14.3963 1.33325 13.4096 1.33325H6.6763C5.7088 1.33325 4.86797 1.99992 4.64797 2.94242L3.85547 6.33325"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M2.70768 14.6666H4.58268C5.27268 14.6666 5.83268 14.1066 5.83268 13.4166V12.5833H14.166V13.4166C14.166 14.1066 14.726 14.6666 15.416 14.6666H17.291C17.866 14.6666 18.3327 14.1999 18.3327 13.6249V8.83325C18.3327 7.45242 17.2135 6.33325 15.8327 6.33325H4.16602C2.78518 6.33325 1.66602 7.45242 1.66602 8.83325V13.6249C1.66602 14.1999 2.13268 14.6666 2.70768 14.6666Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-gray-800 text-left transition-all group-hover:text-blue-500 text-sm font-semibold leading-none">
                          <span>Автодилер</span>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*кнопка Price*/}
            <div className="h-full hidden lg:block">
              <div className="items-center hidden sm:flex space-x-4 lg:flex relative h-full text-black">
                <button className="inline-flex cursor-pointer items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 text-black">
                  <span className="inline-flex font-bold hover:text-blue-700"></span>
                  <p className="text-[14px] leading-[22px] font-semibold">
                    Pricing
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/*RIGHT NAVBAR*/}
          <div className="flex items-center lg:gap-10">
            <div className="mr-4 mt-2">
              <div>
                <div className="relative">
                  <button className="outline-none" type="button">
                    <div className="inline-flex items-center space-x-2 lg:transition">
                      <img
                        src="https://assets.remove-bg.ai/images/flags/ru.svg"
                        alt="flag"
                        className="w-4 h-5 lg:w-[22px] rounded-sm"
                      />
                      <span className="font-semibold text-[14px] leading-[16px] text-neutral-ink-600 hidden lg:block">
                        Русский
                      </span>
                      <div
                        color="inherit"
                        mode="outline"
                        className="text-center text-neutral-ink-500 hidden lg:inline-block"
                      >
                        <svg
                          className="align-middle text-neutral-ink-500 hidden lg:inline-block "
                          width="20"
                          height="20"
                          viewBox="0 0 48 48"
                          fill="none"
                        >
                          <path
                            d="M36 19L24 31L12 19H36Z"
                            fill="none"
                            stroke="#000"
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="ml-2">
                <div className="hidden lg:block ml-10">
                  <button
                    id="enter"
                    className="inline-flex w-full px-3 mt-1 rounded-lg text-base transition hover:bg-opacity-80 bg-transparent !text-black hover:bg-neutral-ink-100 !hover:bg-opacity-100"
                  >
                    <p className="font-semibold text-[16px] leading-[20px]">
                      Вход
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {/*SIDEBAR*/}
          </div>
        </div>
        <div className="absolute lg:hidden top-0 right-0 h-full flex items-center">
          <div className="relative">
            <button className="outline-none" type="button">
              <div className="inline-flex items-center space-x-2 lg:transition lg:hover:bg-neutral-ink-100 lg:rounded lg:p-2">
                <div
                  color="inherit"
                  mode="outline"
                  className="text-center cursor-pointer mr-3 pointer-events-auto"
                >
                  <svg
                    className="inline-block align-middle cursor-pointer mr-2 pointer-events-auto"
                    onClick={() => setOpen(!open)}
                    name="menu"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <g clipPath="url(#clip0_9879_95922)">
                        <path
                          d="M3 5H21"
                          stroke="#252638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21 12H3"
                          stroke="#252638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3 19H21"
                          stroke="#252638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/*Mobile Nav*/}
      <ul
        className={`
      
      duration-500 ${open ? "transform scale-100 opacity-100" : "hidden"}
      `}
      >
        <li className="absolute right-0 lg:hidden">
          <div
            className="py-1 pb-3 pl-7 pr-9 translate-x-6 translate-y-0.4 bg-white w-screen border-t shadow-md 
          lg:w-[360px] lg:h-auto lg:border lg:rounded-md lg:translate-x-6 lg:absolute lg:right-0 lg:top-full lg:translate-y-0"
          >
            <button className="px-3 py-2 transition space-x-[10px] text-neutral-ink-600 w-full inline-flex items-center">
              <span className="font-normal text-[16px] leading-[23px]">
                Pricing
              </span>
            </button>
            <button className="px-3 py-2 transition space-x-[10px] text-neutral-ink-600 w-full inline-flex items-center">
              <span className="font-normal text-[16px] leading-[24px]">
                Download App
              </span>
            </button>
            <div className="flex mt-2">
              <div className="w-[50%]">
                <button className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary rounded-lg text-base transition text-white hover:bg-opacity-80">
                  <p className="font-semibold text-[16px] leading-[20px]">
                    Вход
                  </p>
                </button>
              </div>
              <div className="w-[50%] ml-2">
                <button className="w-full py-3 px-4 bg-secondary group relative text-base-content rounded-lg font-semibold p-2 capitalize flex justify-center items-center">
                  <p className="font-semibold text-[16px] leading-[20px]">
                    Регистрация
                  </p>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
