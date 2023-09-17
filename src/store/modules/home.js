import {
  getHomeDiscountData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
  getPriceHomeData
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getHomeDataAction = createAsyncThunk("getHomeData", (payload, { dispatch }) => {
  // const res =await getPriceHomeData()
  // const res2 = await getHomeHighScoreData()
  getPriceHomeData().then(res => {
    dispatch(changeGoodPrice(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScore(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDisCount(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotrecommenddest(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfo(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfo(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountInfo: {},
    hotrecommendInfo: {},
    longforInfo: {},
    plusInfo:{}
  },
  reducers: {
    changeGoodPrice(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScore(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDisCount(state, { payload }) {
      state.disCountInfo = payload
    },
    changeHotrecommenddest(state, { payload }) {
      state.hotrecommendInfo = payload
    },
    changeLongforInfo(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers(builder) {
    // builder.addCase(getHomeDataAction.fulfilled,(state,{payload}) => {
    //   state.goodPriceInfo = payload
    // })
  }
})

export const {
  changeGoodPrice,
  changeHighScore,
  changeDisCount,
  changeHotrecommenddest,
  changeLongforInfo,
  changePlusInfo
} = homeSlice.actions


export default homeSlice.reducer