import React, { memo } from "react";
import PropTypes from "prop-types";
import { LongforWrapper } from "./style";
import SecitonHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import ScroolView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo(function HomeSectionV3(props) {
  const { infoData } = props;

  return (
    <LongforWrapper>
      <SecitonHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScroolView>
          {infoData.list.map((item) => {
            return <LongForItem key={item.city} itemData={item} />;
          })}
        </ScroolView>
      </div>
    </LongforWrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
