import React, { memo } from "react";
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

export default memo(function HeaderCenter(props) {
  const { isSearch, searchBarClick } = props;

  function searchClick() {
    if (searchBarClick) searchBarClick();
  }
  return (
    <CenterWrapper>
      {/* {!isSearch ? (
        <div className="search-bar" onClick={searchClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      ) : (
        <div className="search-detail">其他内容</div>
      )} */}
      <CSSTransition in={!isSearch} classNames='bar' timeout={250} unmountOnExit={true}>
        <div className="search-bar" onClick={searchClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} classNames='detail' timeout={250} unmountOnExit={true}>
       <div className="search-detail">其他内容</div>
      </CSSTransition>
    </CenterWrapper>
  );
});
