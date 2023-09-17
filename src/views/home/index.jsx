import React, { memo,useEffect} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import { getHomeDataAction } from "@/store/modules/home";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-V1";
import HomeSectionV2 from "./c-cpns/home-section-V2";
import { isEmptyObject } from "@/utils";
import HomeSectionV3 from "./c-cpns/home-section-V3";
import HomeSectionV4 from "./c-cpns/home-section-V4";
import { changeHeaderFixed } from "@/store/modules/main";

const Home = memo(() => {
 


  const { goodPriceInfo, highScoreInfo,disCountInfo,hotrecommendInfo ,longforInfo,plusInfo} = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      disCountInfo: state.home.disCountInfo,
      hotrecommendInfo:state.home.hotrecommendInfo,
      longforInfo:state.home.longforInfo,
      plusInfo:state.home.plusInfo,
    }),
    shallowEqual
  );


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeDataAction());
    dispatch(changeHeaderFixed({isFixed:true,topAlpha:true}))
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(disCountInfo) && <HomeSectionV2 infoData={disCountInfo} />}
        {isEmptyObject(hotrecommendInfo) && <HomeSectionV2 infoData={hotrecommendInfo} />}
        {isEmptyObject(longforInfo) && <HomeSectionV3 infoData={longforInfo} />}
        {isEmptyObject(goodPriceInfo) &&<HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObject(plusInfo) && <HomeSectionV4 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
