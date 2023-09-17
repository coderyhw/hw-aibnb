import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomItem from "../house-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo(function SectionRooms(props) {
  const { roomList = [],ItemWidth } = props;

  return (
    <RoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} ItemWidth={ItemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  ItemWidth:PropTypes.string
};

export default SectionRooms;
