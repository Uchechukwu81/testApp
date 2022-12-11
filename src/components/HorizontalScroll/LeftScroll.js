import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaAngleLeft } from "react-icons/fa";

export default function LeftScroll() {

    const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);



    return (
        <FaAngleLeft disabled={isFirstItemVisible} onClick={() => scrollPrev()} size={30}>
          Left
        </FaAngleLeft>
      );
};
