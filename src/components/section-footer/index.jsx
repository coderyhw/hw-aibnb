import React, { memo } from "react";
import PropTypes from "prop-types";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo(function SectionFooter(props) {

  const { title } = props;

  let showMessage = title ? `显示更多${title}房源` : '显示全部'

  const navigate = useNavigate()
  function moreInfoHandle(){
    navigate('/entrie')
  }

  return (
    <FooterWrapper color={title ? "#00848a" : "#000"}>
      <div className="info" onClick={moreInfoHandle}>
        <span className="text">{showMessage}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  title: PropTypes.string,
};

export default SectionFooter;
