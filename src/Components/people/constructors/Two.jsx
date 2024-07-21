import React from "react";

function Two({ children }) {
  return (
    <div className="mt-3">
      <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-500">
        {children}
      </p>
    </div>
  );
}

export default Two;
