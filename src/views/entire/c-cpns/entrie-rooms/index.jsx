import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { RoomWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/house-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfo } from "@/store/modules/details";

const EntrieRooms = memo(function EntrieRooms(props) {
  const { roomList, total,isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      total: state.entire.total,
      isLoading:state.entire.isLoading,
    }),
    shallowEqual
  );


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfo(item))
    navigate('/detail')
  },[navigate,dispatch])

  return (
    <RoomWrapper>
      <h2 className="title">共{total}多处住所</h2>
      <div className="list">
        {roomList.map((item, index) => {
          return <RoomItem itemData={item} ItemWidth="20%" key={item.id} itemClick={itemClickHandle} />
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  );
});

EntrieRooms.propTypes = {};

export default EntrieRooms;
