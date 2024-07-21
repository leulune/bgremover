import React from "react";

function Five({ children }) {
  return (
    <div className="mt-8">
      <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500">
        {children}
      </p>
    </div>
  );
}

export default Five;
