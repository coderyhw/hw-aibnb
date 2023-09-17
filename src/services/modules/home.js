import HWRequest from "..";

export function getPriceHomeData(){
  return HWRequest.get({
    url:"/home/goodprice"
  })
}

export function getHomeHighScoreData(){
  return HWRequest.get({
    url:"/home/highscore"
  })
}

export function getHomeDiscountData(){
  return HWRequest.get({
    url:'/home/discount'
  })
}

export function getHomeHotRecommendData(){
  return HWRequest.get({
    url:'/home/hotrecommenddest'
  })
}

export function getHomeLongforData(){
  return HWRequest.get({
    url:'/home/longfor'
  })
}

export function getHomePlusData(){
  return HWRequest.get({
    url:'/home/plus'
  })
}