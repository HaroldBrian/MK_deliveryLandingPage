"use client";
import { RiArrowUpLine } from "@remixicon/react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [shadowButton, setShadowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShadowButton(true) : setShadowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {shadowButton && (
        <div className="">
          <button
            className="btn btn-accent fixed bottom-5 right-7 z-50 shadow-md shadow-white rounded-full w-12 h-12 p-0"
            onClick={handleScrollToTop}
          >
            <RiArrowUpLine className="text-[26px] text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
