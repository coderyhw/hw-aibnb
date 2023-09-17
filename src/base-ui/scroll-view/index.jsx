import React, { memo, useEffect, useRef, useState } from "react";

import { ScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScroolView = memo(function ScroolView(props) {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  let totalDistanceRef = useRef();

  const srollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = srollContentRef.current.scrollWidth;
    const clientWidth = srollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    setShowRight(totalDistance > 0);
    totalDistanceRef.current = totalDistance;
  }, [props.children]);

  function controlClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = srollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;
    // console.log(newEl.offsetLeft)
    srollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newIndex);
    //是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newElOffsetLeft);
    // 左边按钮
    setShowLeft(newElOffsetLeft > 0);
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => controlClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => controlClick(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={srollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScroolView;
