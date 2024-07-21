import React from "react";

function Four({ children }) {
  return (
    <div className="mt-4">
      <p className="font-normal text-[20px] leading-[30px] text-black">
        {children}
      </p>
    </div>
  );
}

export default Four;
