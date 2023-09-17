import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CloseOutlined } from "@ant-design/icons";
import {
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import Indicator from "../indicator";
import classNames from "classnames";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";

const PrctureBrower = memo(function PrctureBrower(props) {
  const { prictureUrls, closeClick } = props;

  const [currrentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeBtn() {
    if (closeClick) closeClick();
  }

  function handleClick(isNext = true) {
    let newIndex = isNext ? currrentIndex + 1 : currrentIndex - 1;
    if (newIndex < 0) newIndex = prictureUrls.length - 1;
    if (newIndex > prictureUrls.length) newIndex = 0;

    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  function bottomClick(item,index){
    setIsNext(index > currrentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtn}>
          <CloseOutlined style={{ fontSize: "28px", color: "#fff" }} />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => handleClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => handleClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={prictureUrls[currrentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={prictureUrls[currrentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currrentIndex + 1}/{prictureUrls.length}:
              </span>
              <span>room 图片{currrentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>隐藏照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currrentIndex}>
              {prictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currrentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => bottomClick(item,index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PrctureBrower.propTypes = {
  prictureUrls: PropTypes.array,
};

export default PrctureBrower;
