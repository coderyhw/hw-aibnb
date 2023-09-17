import React, { memo } from "react";
import PropTypes from "prop-types";
import { Rate, Carousel } from "antd";

import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useRef } from "react";
import Indicator from "@/base-ui/indicator";
import { useState } from "react";
import classNames from "classnames";

const RoomItem = memo(function RoomItem(props) {
  const { itemData, ItemWidth = "25%",itemClick } = props;

  const sliderRef = useRef();

  const [selectIndex, setSelectIndex] = useState(0);

  function handleBtnClick(e,isRight) {
    e.stopPropagation()
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    // 最新索引
    let nowIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (nowIndex < 0) nowIndex = itemData.picture_urls.length - 1;
    if (nowIndex > itemData.picture_urls.length - 1) nowIndex = 0;
    setSelectIndex(nowIndex);
  }
  const pictureEle = (
    <div className="cover">
      <img src={itemData.picture_url} alt="a" />
    </div>
  );

  const picture_urlsEle = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => handleBtnClick(e,false)}>
          <IconArrowLeft />
        </div>
        <div className="btn right" onClick={(e) => handleBtnClick(e,true)}>
          <IconArrowRight />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="a" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  function itemClickHandle(){
    if(itemClick) itemClick(itemData)
  }

  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={ItemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureEle : picture_urlsEle}
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            allowHalf
            defaultValue={itemData.star_rating ?? 5}
            disabled
            style={{ fontSize: "12px", color: "#00848a" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  ItemWidth: PropTypes.string,
};

export default RoomItem;
