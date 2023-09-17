import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { SectionV2Wrapper } from "./style";

import SecitonHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo(function HomeSectionV2(props) {
  const { infoData } = props;
  const initName = Object.keys(infoData.dest_list)[0];
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const [name, setName] = useState(initName);
  const tabClickHandle = useCallback(function (item, index) {
    setName(item);
  }, []);

  return (
    <SectionV2Wrapper>
      <SecitonHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} ItemWidth="33.333%" />
      <SectionFooter title={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
