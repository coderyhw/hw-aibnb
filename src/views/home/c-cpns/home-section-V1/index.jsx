import React, { memo } from "react";
import PropTypes from "prop-types";

import SecitonHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import { HomeSectionV1Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo(function HomeSectionV1(props) {

  const { infoData }  = props

  return (
    <HomeSectionV1Wrapper>
      <div className="good-price">
        <SecitonHeader title={infoData?.title} subtitle={infoData?.subtitle} />
        <SectionRooms roomList={infoData.list} ItemWidth="25%" ></SectionRooms>
        <SectionFooter/>
      </div>
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData:PropTypes.object
};

export default HomeSectionV1;
