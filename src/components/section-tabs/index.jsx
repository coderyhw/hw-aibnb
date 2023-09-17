import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import { TabWrapper } from "./style";
import classNames from "classnames";
import ScroolView from "@/base-ui/scroll-view";

const SectionTabs = memo(function SectionTabs(props) {
  const { tabNames = [], tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClick(item, index) {
    setCurrentIndex(index);
    tabClick(item, index);
  }

  return (
    <TabWrapper>
      <ScroolView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              key={index}
              onClick={(e) => itemClick(item, index)}
            >
              {item}
            </div>
          );
        })}
      </ScroolView>
    </TabWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
