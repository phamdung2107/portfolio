import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="btn__scroll">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
