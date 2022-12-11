import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaAngleRight } from "react-icons/fa";

export default function RightScroll() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <FaAngleRight disabled={isFirstItemVisible} onClick={() => scrollPrev()} size={30}>
      Left
    </FaAngleRight>
  );
}
