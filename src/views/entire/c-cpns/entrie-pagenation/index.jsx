import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { PageNationWrapper } from "./style";
import { Pagination } from "antd";
import {  fetchRoomList } from "@/store/modules/entire/createActions";

const EntriePageNation = memo(function EntriePageNation(props) {
  const { total, currentPage, roomList } = useSelector(
    (state) => ({
      total: state.entire.total,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );
  
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  
  const dispatch = useDispatch()
  function changCurrent(page, pageSize) {
    window.scrollTo(0,0);
    dispatch(fetchRoomList(page))
  }

  return (
    <PageNationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination
            current={currentPage || 1}
            total={total}
            showSizeChanger={false}
            onChange={changCurrent}
          />
          <div className="desc">
            第{startCount}-{endCount}个房源,共超过{total}个
          </div>
        </div>
      )}
    </PageNationWrapper>
  );
});

EntriePageNation.propTypes = {};

export default EntriePageNation;
