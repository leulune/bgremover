import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Home/Navbar";
import ColorPicker from "../helpages/Colorpicker.js";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import checkboard from "./assets/checkboard.png";
import { useFile } from "../helpages/UseFile";

function Upload() {
  const countStyle = {
    height: `calc(100% - 44px)`,
  };

  const countStyle2 = {
    height: "calc(100% - 150px)",
  };

  const location = useLocation();
  const { file, imageUrl } = location.state || {};
  const [image, setImage] = useState(null);
  const [processedImg, setProcessedImg] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [originalImages, setOriginalImages] = useState([]);
  const [open, setOpen] = useState("origin");
  const [buttonBlue, setButtonBlue] = useState("circle0");
  const [bgColor, setBgColor] = useState("");
  const { fileInput, handleBtnClick, handleFileChange } = useFile();
  const isFirstRender = useRef(true);
  const navigate = useNavigate();

  const handleBlueClick = (button, color = "") => {
    if (button !== buttonBlue) {
      setButtonBlue(button);
    }
    switch (button) {
      case "circle0":
        setBgColor(`url(${checkboard})`);
        break;
      case "circle1":
        setBgColor(color);
        break;
      case "circle2":
        setBgColor("rgb(0, 0, 0)");
        break;
      case "circle3":
        setBgColor("rgb(255, 255, 255)");
        break;
      case "circle4":
        setBgColor("rgb(249, 84, 84)");
        break;
      case "circle5":
        setBgColor("rgb(68, 129, 248)");
        break;
      case "circle6":
        setBgColor("rgb(249, 201, 131)");
        break;
      case "circle7":
        setBgColor("rgb(255, 174, 189)");
        break;
      case "circle8":
        setBgColor("rgb(244, 100, 54)");
        break;
      case "circle9":
        setBgColor("rgb(155, 150, 100)");
        break;
      case "circle10":
        setBgColor("rgb(72, 255, 167)");
        break;
      case "circle11":
        setBgColor("rgb(103, 2, 231)");
        break;
      default:
        setBgColor("");
        break;
    }
  };

  const handleColorChange = (color) => {
    handleBlueClick("circle1", color);
  };

  useEffect(() => {
    const savedImages = JSON.parse(
      localStorage.getItem("uploadedImages") || "[]"
    );
    const savedOriginals = JSON.parse(
      localStorage.getItem("originalImages") || "[]"
    );
    if (savedImages.length > 0) {
      setUploadedImages(savedImages);
      setOriginalImages(savedOriginals);
      setSelectedImageIndex(savedImages.length - 1);
      setProcessedImg(savedImages[savedImages.length - 1]);
      setImage(savedOriginals[savedOriginals.length - 1]);
    }
  }, []);

  useEffect(() => {
    const newIndex = uploadedImages.indexOf(processedImg);
    if (newIndex !== -1) {
      setSelectedImageIndex(newIndex);
    }
  }, [processedImg, uploadedImages]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result.toString();
        setImage(base64Image);
        localStorage.setItem("savedImage", base64Image);

        const savedImages = JSON.parse(
          localStorage.getItem("uploadedImages") || "[]"
        );
        const savedOriginals = JSON.parse(
          localStorage.getItem("originalImages") || "[]"
        );
        const existingIndex = savedOriginals.indexOf(base64Image);

        if (existingIndex !== -1) {
          setProcessedImg(savedImages[existingIndex]);
          setOpen("delete");
        } else {
          sendImageToServer(base64Image);
          const newOriginalImages = [...originalImages, base64Image];
          setOriginalImages(newOriginalImages);
          localStorage.setItem(
            "originalImages",
            JSON.stringify(newOriginalImages)
          );
        }
      };
      reader.readAsDataURL(file);
    } else if (imageUrl) {
      fetchImage(imageUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, imageUrl]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(
    uploadedImages.length - 1
  );

  const buttonClick = (index) => {
    if (index === selectedImageIndex) {
      // Удалить картинку
      const updatedImages = uploadedImages.filter((_, i) => i !== index);
      const updatedOriginals = originalImages.filter((_, i) => i !== index);
      setUploadedImages(updatedImages);
      setOriginalImages(updatedOriginals);

      localStorage.setItem("uploadedImages", JSON.stringify(updatedImages));
      localStorage.setItem("originalImages", JSON.stringify(updatedOriginals));

      if (updatedImages.length > 0) {
        const newSelectedIndex = updatedImages.length - 1;
        setSelectedImageIndex(newSelectedIndex);
        setProcessedImg(updatedImages[newSelectedIndex]);
        setImage(updatedOriginals[newSelectedIndex]);
      } else {
        setSelectedImageIndex(null);
        setProcessedImg(null);
        setImage(null);
        navigate("/");
      }
    } else {
      setSelectedImageIndex(index);
      setProcessedImg(uploadedImages[index]);
      setImage(originalImages[index]);
    }
  };

  const handleDownload = () => {
    // скачать картинку с фоном через канвас
    if (processedImg) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const bgImg = new Image();

      img.src = processedImg;
      bgImg.src = bgColor.includes("url(") ? checkboard : "";

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        if (bgColor.includes("url(")) {
          bgImg.onload = () => {
            ctx.drawImage(bgImg, 0, 0, img.width, img.height);
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "processed-image.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };
        } else {
          // цветной фон
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, img.width, img.height);
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "processed-image.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
    }
  };

  const handleClick = (value) => {
    setOpen(value);
  };

  const fetchImage = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result.toString();
        setImage(base64Image);
        localStorage.setItem("savedImage", base64Image);
        const savedImages = JSON.parse(
          localStorage.getItem("uploadedImages") || "[]"
        );
        const savedOriginals = JSON.parse(
          localStorage.getItem("originalImages") || "[]"
        );
        const existingIndex = savedOriginals.indexOf(base64Image);

        if (existingIndex !== -1) {
          setProcessedImg(savedImages[existingIndex]);
          setOpen("delete");
        } else {
          sendImageToServer(base64Image);
        }
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
    }
  };

  const sendImageToServer = async (base64Image) => {
    const title = "uploaded_image.jpg";
    const mimeType = base64Image.split(";")[0].split(":")[1];
    try {
      const response = await axios.post(
        `http://localhost:3000/removeImageBackground`,
        {
          title,
          encodedImage: base64Image,
          mimeType,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
      console.log("Ответ сервера", response.data);

      if (response.data.encodedImageWithoutBackground) {
        const processedImage =
          response.data.encodedImageWithoutBackground.replace(
            /^data:text\/html;charset=utf-8;base64,/,
            "data:image/jpeg;base64,"
          );
        setProcessedImg(processedImage);
        setOpen("delete");
        const newUploadedImages = [...uploadedImages, processedImage];
        setUploadedImages(newUploadedImages);
        localStorage.setItem(
          "uploadedImages",
          JSON.stringify(newUploadedImages)
        );
      } else {
        console.error("Неожиданный ответ сервера", response.data);
      }
    } catch (error) {
      if (error.response) {
        console.error("Ошибка сервера", error.response.data);
      } else if (error.request) {
        console.error("Нет ответа", error.request);
      } else {
        console.error("Ошибка при настройке запроса", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div role="button">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 transition flex justify-center items-center invisible opacity-0">
          <p className="text-3xl text-white font-medium">
            Перетащите изображение куда угодно
          </p>
        </div>
        <input
          accept="image/png, image/jpeg, image/heic"
          type="file"
          tabIndex="-1"
          hidden=""
          style={{ display: "none" }}
        ></input>
        <div className="mt-[68px] custom-height tlg:h-full overflow-hidden 2xs:flex 2xs:flex-col tlg:mt-0 relative">
          <div className="w-full flex-auto flex flex-col relative md:overflow-hidden h-full lg:pt-20 ">
            <div className="header-ads mx-auto">
              <div></div>
            </div>
            <div
              className="order-1 w-full tlg:h-full flex-auto lg:order-0 pt-0 bg-blue-50 flex overflow-hidden gap-0 lg:gap-2 justify-center lg:justify-between tmd:items-start tlg:items-center md+:items-center lg:items-center"
              style={{ height: "80vh" }}
            >
              <div
                className="block rounded-xl shadow-md border bg-white w-full lg:w-auto lg+:w-auto flex-col h-full"
                style={{ height: "60vh" }}
              >
                <div className="flex justify-center lg:mt-4 mt-2 w-full">
                  <div className="lg:inline-flex lg+:inline-flex w-auto rounded-[40px] bg-gray-200">
                    <div
                      onClick={() => handleClick("origin")}
                      className={`${
                        open === "origin" ? "bg-black-1 text-white" : ""
                      } bg-gray-200 h-9 sm:h-10 w-auto rounded-[40px] inline-flex justify-center items-center px-4 cursor-pointer`}
                    >
                      <div className="inline-block w-5">
                        <svg
                          className="w-full h-full"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 19H3.5C2.96957 19 2.46086 18.7893 2.08579 18.4142C1.71071 18.0391 1.5 17.5304 1.5 17V3C1.5 2.46957 1.71071 1.96086 2.08579 1.58579C2.46086 1.21071 2.96957 1 3.5 1H17.5C18.0304 1 18.5391 1.21071 18.9142 1.58579C19.2893 1.96086 19.5 2.46957 19.5 3V17C19.5 17.5304 19.2893 18.0391 18.9142 18.4142C18.5391 18.7893 18.0304 19 17.5 19Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12.621 5.879C12.9123 6.15454 13.1454 6.48569 13.3066 6.85288C13.4677 7.22006 13.5536 7.61582 13.5592 8.01677C13.5648 8.41772 13.4899 8.81572 13.339 9.18724C13.1882 9.55876 12.9643 9.89627 12.6808 10.1798C12.3973 10.4633 12.0598 10.6872 11.6882 10.838C11.3167 10.9889 10.9187 11.0638 10.5178 11.0582C10.1168 11.0526 9.72106 10.9667 9.35388 10.8056C8.98669 10.6444 8.65554 10.4113 8.38 10.12C7.85008 9.5513 7.56158 8.79911 7.5753 8.02191C7.58901 7.2447 7.90386 6.50316 8.45351 5.95351C9.00316 5.40386 9.7447 5.08901 10.5219 5.0753C11.2991 5.06158 12.0513 5.35008 12.62 5.88"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4.5 19L4.857 17.216C5.03824 16.3092 5.52806 15.4933 6.24312 14.9069C6.95817 14.3206 7.85429 14.0001 8.779 14H12.221C13.1457 14.0001 14.0418 14.3206 14.7569 14.9069C15.4719 15.4933 15.9618 16.3092 16.143 17.216L16.5 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="font-normal text-[14px] leading-[20px] ml-2">
                        Оригинал
                      </p>
                    </div>
                    <div
                      onClick={() => handleClick("delete")}
                      className={`${
                        open === "delete" ? "bg-black-1 text-white" : ""
                      } bg-gray-200 h-9 sm:h-10 w-auto rounded-[40px] inline-flex justify-center items-center px-4 cursor-pointer`}
                    >
                      <div className="inline-block w-5">
                        <svg
                          className="w-full h-full"
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.52695 16.977H6.93395C7.46434 16.9769 7.97296 16.7661 8.34795 16.391L17.0719 7.66704C17.4469 7.29199 17.6575 6.78337 17.6575 6.25304C17.6575 5.72271 17.4469 5.2141 17.0719 4.83904L13.7729 1.54004C13.3979 1.1651 12.8893 0.954468 12.3589 0.954468C11.8286 0.954468 11.32 1.1651 10.9449 1.54004L1.51795 10.967C1.143 11.3421 0.932373 11.8507 0.932373 12.381C0.932373 12.9114 1.143 13.42 1.51795 13.795L4.11395 16.391C4.48795 16.766 4.99595 16.977 5.52695 16.977V16.977Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.08997 6.39001L12.22 12.52"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M18.9999 16.98H6.92993"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="font-normal text-[14px] leading-[20px] ml-2">
                        Удалить фон
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="lg+:min-h-[350px] lg:min-h-[350px] lg+:grid lg:grid lg+:grid-cols-9 lg:grid-cols-9 w-full flex-col lg+:h-auto lg:h-auto"
                  style={{ countStyle, height: "50vh" }}
                >
                  <div
                    className="lg:col-span-6 flex lg:justify-center lg:items-center py-2 px-4 
              lg:py-6 lg:pb-4 flex-col flex-auto w-fit m-auto"
                    style={countStyle2}
                  >
                    <div
                      className="xs+:!h-full flex lg:justify-center lg:items-center relative"
                      style={{ height: "100%" }}
                    >
                      <div>
                        {image && (
                          <img
                            src={image}
                            alt="original"
                            className={`${
                              open === "origin" ? "" : "hidden"
                            } !max-h-[35vh] h-full w-full`}
                          />
                        )}
                      </div>
                      <div className={`${open === "delete" ? "bakraund" : ""}`}>
                        {processedImg && (
                          <img
                            src={processedImg}
                            alt="processed"
                            className={`${
                              open === "delete" ? "" : "hidden"
                            } !max-h-[35vh] h-full w-full`}
                            style={{
                              backgroundColor: bgColor,
                              backgroundImage: bgColor.includes("url")
                                ? bgColor
                                : "none",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 lg:flex lg:flex-col lg:mr-5 lg:items-center mb-8 mt-2">
                    <div className="lg:mt-4">
                      <p className="font-semibold text-[14px] leading-[18px] mb-2 hidden lg:block">
                        Выбрать цвет фона
                      </p>
                      <div className="hidden lg:px-3 lg:grid lg:grid-cols-6 lg:gap-3 mb-5">
                        <div
                          onClick={() => handleBlueClick("circle0")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle0"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0 color-picker-transparent`}
                            style={{
                              backgroundImage: `url(${checkboard})`,
                              backgroundSize: "220px 120px",
                            }}
                          ></button>
                        </div>
                        <div className="col-span-1">
                          <ColorPicker
                            onColorChange={handleColorChange}
                            activeButton={buttonBlue}
                            setActiveButton={setButtonBlue}
                          />
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle2")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle2"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(0, 0, 0)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle3")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle3"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(255, 255, 255)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle4")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle4"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(249, 84, 84)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle5")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle5"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(68, 129, 248)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle6")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle6"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(249, 201, 131)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle7")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle7"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(255, 174, 189)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle8")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle8"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(244, 100, 54)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle9")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle9"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(155, 150, 100)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle10")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle10"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(72, 255, 167)" }}
                          ></button>
                        </div>
                        <div
                          onClick={() => handleBlueClick("circle11")}
                          className="col-span-1"
                        >
                          <button
                            className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                              buttonBlue === "circle11"
                                ? "border-blue-500 after:opacity-100"
                                : ""
                            } border-white after:opacity-0`}
                            style={{ backgroundColor: "rgb(103, 2, 231)" }}
                          ></button>
                        </div>
                      </div>
                      <div className="w-full text-center mb-4 lg:mb-[60px] gap-2 sm:gap-10 flex justify-between items-center">
                        <button className="space-x-2 lg:inline-flex mx-auto 2xs:mr-0 text-[14px] font-semibold text-blue-600 sm:text-[12px] pb-1 border-b border-blue-500 border-dashed disabled:text-neutral-ink-400">
                          <div
                            color="inherit"
                            mode="outline"
                            className="text-center inline"
                          >
                            <svg
                              className="inline-block align-middle"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_10604_2927)">
                                <path
                                  d="M5.807 4C7.35726 4 8.614 5.25674 8.614 6.807C8.614 8.35726 7.35726 9.614 5.807 9.614C4.25674 9.614 3 8.35726 3 6.807C3 5.25674 4.25674 4 5.807 4ZM5.807 4C5.807 4 5.807 4 5.807 4Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M13 18H14.6"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M19.3999 18H20.9999"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M13.7802 14.2898L4.4502 9.25977"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M5.808 20.0002C7.35826 19.9997 8.61455 18.7425 8.614 17.1922C8.61345 15.642 7.35626 14.3857 5.806 14.3862C4.25613 14.3868 3 15.6434 3 17.1932C2.99946 18.7429 4.25532 19.9997 5.80503 20.0002C5.80603 20.0002 5.807 20.0002 5.808 20.0002Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M19.0002 6.91016L4.4502 14.7402"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_10604_2927">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span>Изменить выделение</span>
                        </button>
                        <button className="space-x-2 inline-flex mx-auto 2xs:ml-0 text-[14px] font-semibold text-blue-600 sm:text-[12px] pb-1 border-b border-blue-500 border-dashed disabled:text-neutral-ink-400">
                          <div className="inline-block">
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_871_4571)">
                                <path
                                  d="M18.3641 5.63606C19.1998 6.47179 19.8627 7.46395 20.315 8.55588C20.7673 9.64782 21.0001 10.8182 21.0001 12.0001C21.0001 13.182 20.7673 14.3523 20.315 15.4442C19.8627 16.5362 19.1998 17.5283 18.3641 18.3641C17.5283 19.1998 16.5362 19.8627 15.4442 20.315C14.3523 20.7673 13.182 21.0001 12.0001 21.0001C10.8182 21.0001 9.64782 20.7673 8.55588 20.315C7.46395 19.8627 6.47179 19.1998 5.63606 18.3641C3.94822 16.6762 3 14.387 3 12.0001C3 9.61309 3.94822 7.32389 5.63606 5.63606C7.32389 3.94822 9.61309 3 12.0001 3C14.387 3 16.6762 3.94822 18.3641 5.63606Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 3V21"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M3.9502 8H12.0002"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M3 12H12"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M3.9502 16H12.0002"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_871_4571">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span>Редактировать фон</span>
                        </button>
                      </div>
                    </div>
                    <div className="relative grid grid-col-2 gap-3 lg:space-y-1 px-4 lg:px-0 pb-4 lg:pb-0 lg:mt-4 lg:w-full bg-white">
                      <button
                        onClick={handleDownload}
                        className="inline-flex items-center justify-center lg:transition px-3 rounded-[40px] !bg-[#EBEBFF] !text-blue-600 py-2 w-full sm:py-0"
                      >
                        <div className="flex items-center font-semibold">
                          <svg
                            className="align-middle mr-[-4px] mb-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="22"
                            height="24"
                            style={{ color: "#0D1FBD" }}
                          >
                            <path
                              d="m12.556 8.1108-3.556 3.556-3.556-3.556"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="m9 1v10.67"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="m17 13.444c0 0.9432-0.3746 1.8476-1.0415 2.5145s-1.5714 1.0415-2.5145 1.0415h-8.888c-0.94311 0-1.8476-0.3746-2.5145-1.0415s-1.0415-1.5713-1.0415-2.5145"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <div
                            className="text-center"
                            style={{ color: "#0D1FBD" }}
                          >
                            <p className="font-semibold text-[18px] text-sm tlg:text-lg sm:text-[14px]">
                              Скачать
                            </p>
                            <p className="font-normal text-[12px] leading-[18px] sm:text-[10px] mr-4">
                              960x1280px
                            </p>
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={handleDownload}
                        className="inline-flex items-center justify-center lg:transition px-3 rounded-[40px] !text-white !bg-gradient-to-r from-[#01DBAF] to-[#002FE9] py-2 w-full sm:py-0"
                      >
                        <div className="flex items-center font-semibold">
                          <svg
                            className="align-middle mr-[3px] mb-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="22"
                            height="24"
                          >
                            <path
                              d="m12.556 8.1108-3.556 3.556-3.556-3.556"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="m9 1v10.67"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="m17 13.444c0 0.9432-0.3746 1.8476-1.0415 2.5145s-1.5714 1.0415-2.5145 1.0415h-8.888c-0.94311 0-1.8476-0.3746-2.5145-1.0415s-1.0415-1.5713-1.0415-2.5145"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <div className="text-center">
                            <p className="font-semibold text-[18px] text-sm tlg:text-lg sm:text-[14px]">
                              Скачать HD
                            </p>
                            <p className="font-normal text-[12px] leading-[18px] sm:text-[10px] mr-7">
                              960x1280px
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:h-[120px] h-20 sm:h-[72px] py-2 lg:shadow-none shadow-md lg:py-0 w-full sm:items-center lg:items-center order-0 md:order-1 justify-self-end bg-white lg:px-24 px-4 flex flex-row fixed bottom-0">
            <div
              className="lg:col-span-1 col-span-2 relative align-baseline lg:mr-3 lg:mt-3 mt-1 2xs:w-[70px] lg:w-[106px] lg:h-[72px] w-14 h-14 cursor-pointer rounded-full bg-blue-200 inline-flex flex-col justify-center items-center"
              onClick={handleBtnClick}
            >
              <div
                color="inherit"
                mode="outline"
                className="text-center absolute top-2 sm:top-1 mt-[2px] lg:mt-0 lg:top-3 right-[32%] lg:right-[35%] text-blue-600"
              >
                <svg
                  className="inline-block align-middle absolute top-2 sm:top-1 mt-[2px] lg:mt-0 lg:top-3 right-[32%] lg:right-[35%] text-blue-600"
                  width="18"
                  height="18"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M24.0605 10L24.0239 38"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 24L38 24"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="font-semibold text-[12px] leading-[16px] text-blue-600 absolute top-8 lg:top-9 sm:text-[10px]">
                Загрузить
              </p>
            </div>
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={(event) => {
                handleFileChange(event);
                setOpen("origin");
              }}
            />
            <div className="lg:col-span-7 col-span-10 mx-3 w-full overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-hidden">
              {uploadedImages.map((base64Image, index) => (
                <div
                  key={index}
                  onClick={() => buttonClick(index)}
                  className={`${
                    index === selectedImageIndex
                      ? "border-2 border-blue-600"
                      : ""
                  } lg:mr-4 mr-1 align-baseline lg:mt-3 mt-1 relative lg:w-[72px] lg:h-[72px] w-14 h-14 cursor-pointer rounded-full bg-blue-200 inline-flex flex-col justify-center items-center`}
                >
                  {index === selectedImageIndex && (
                    <div className="absolute w-full h-full z-10 flex justify-center items-center backdrop-brightness-50 rounded-full">
                      <div
                        color="inherit"
                        mode="outline"
                        className="text-center text-white"
                      >
                        <svg
                          className="inline-block align-middle text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M9 10V44H39V10H9Z"
                            fill="none"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M20 20V33"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M28 20V33"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M4 10H44"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M16 10L19.289 4H28.7771L32 10H16Z"
                            fill="none"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                  <img
                    className="w-full h-full object-cover rounded-full"
                    alt={`uploaded-${index}`}
                    src={base64Image}
                  />
                </div>
              ))}
            </div>
            <div className="hidden flex-auto lg:flex gap-2 items-center justify-end mt-2 col-span-4 w-[300px]">
              <div className="flex gap-2">
                <button
                  aria-label="twitter"
                  className="react-share__ShareButton"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "0",
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex border border-neutral-ink-200 rounded-xl p-2 cursor-pointer">
                    <div color="#58acec" mode="fill" className="text-center">
                      <svg
                        className="inline-block align-middle"
                        enableBackground="new 0 0 28 28"
                        height="22px"
                        id="Layer_1"
                        version="1.0"
                        viewBox="0 0 32 32"
                        width="28px"
                      >
                        <path
                          d="M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563
                    c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  
                    c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  
                    C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z"
                          fill="#55ACEE"
                        ></path>
                      </svg>
                    </div>
                    Поделиться
                  </div>
                </button>
                <button
                  aria-label="facebook"
                  className="react-share__ShareButton"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "0",
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex border border-neutral-ink-200 rounded-xl p-2 cursor-pointer">
                    <div color="#405c9c" mode="fill" className="text-center">
                      <svg
                        className="inline-block align-middle"
                        enableBackground="new 0 0 28 28"
                        height="22px"
                        id="Layer_1"
                        version="1.0"
                        viewBox="0 0 32 32"
                        width="28px"
                      >
                        <path
                          d="M18,32V18h6l1-6h-7V9c0-2,1.002-3,3-3h3V0c-1,0-3.24,0-5,0c-5,0-7,3-7,8v4H6v6h6v14H18z"
                          fill="#3B5998"
                          id="f_1_"
                        ></path>
                      </svg>
                    </div>
                    Поделиться
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Upload;
