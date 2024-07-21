import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function useFile() {
  const fileInput = useRef(null);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      navigate("/upload", { state: { file } });
      
    }
  };

  return { fileInput, handleBtnClick , handleFileChange };
}


