import HWRequest from "..";

export function getEntireRoomList(offset=0,size=20){
  return HWRequest.get({
    url:'entire/list',
    params:{
      offset,
      size
    }
  })
}