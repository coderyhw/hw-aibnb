import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constans'

export const changeCurrentPage = (currentPage) => ({
  type:actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomList = (roomList) => ({
  type:actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotal = (total) => ({
  type:actionTypes.CHANGE_TOTAL,
  total
})

export const changeLoading = (isLoading) => ({
  type:actionTypes.CHANGE_LOADING,
  isLoading
})

export const fetchRoomList = (page = 0) => {
  return async (dispatch,getState) => {
     dispatch(changeCurrentPage(page))
     dispatch(changeLoading(true))
     const res = await getEntireRoomList(page * 20)
     dispatch(changeLoading(false))
     const {list:roomList,totalCount:total} = res
     dispatch(changeRoomList(roomList))
     dispatch(changeTotal(total))
  }
}