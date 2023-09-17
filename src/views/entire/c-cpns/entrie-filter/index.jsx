import React, { memo, useState } from "react";
// import PropTypes from "prop-types";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntrieFilter = memo(function EntrieFilter(props) {
  const [selectItems, setSelectItems] = useState([]);

  function itemClick(item, index) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      newItems.splice(newItems.findIndex(it => it === item),1)
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={index}
              onClick={(e) => itemClick(item, index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntrieFilter;
