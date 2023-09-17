import React, { memo } from "react";
import PropTypes from "prop-types";
import { SectionV3Wrapper } from "./style";
import SecitonHeader from "@/components/section-header";
import RoomItem from "@/components/house-item";
import ScroolView from "@/base-ui/scroll-view";

const HomeSectionV4 = memo(function HomeSectionV4(props) {
  const { infoData } = props;
  return (
    <SectionV3Wrapper>
      <SecitonHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScroolView>
          {infoData.list.map((item) => {
            return <RoomItem itemData={item} key={item.id} ItemWidth="20%" />;
          })}
        </ScroolView>
      </div>
    </SectionV3Wrapper>
  );
});

HomeSectionV4.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV4;
