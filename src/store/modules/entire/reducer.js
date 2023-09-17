import * as actionTypes from './constans'


const initialState = {
  currentPage: 0,
  roomList: [],
  total: 0,
  isLoading:false
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL:
      return { ...state, total: action.total }
    case actionTypes.CHANGE_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export default reducer
