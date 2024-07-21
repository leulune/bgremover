import React from "react";

function One({ imageUrl }) {
  return <div className="w-14 h-14 rounded-full">
    <img
              alt="avatar"
              src={imageUrl}
              className="ml-[1px] border rounded-full w-full h-full object-cover"
              width="56"
              height="56"
              loading="lazy"
            />
    </div>;
}

export default One;
