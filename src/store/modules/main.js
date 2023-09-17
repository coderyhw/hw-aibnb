import {createSlice} from '@reduxjs/toolkit'


const mainSlice = createSlice({
  name:'main',
  initialState:{
    headerConfig:{
      isFixed:false,
      topAlpha:false
    }
  },
  reducers:{
    changeHeaderFixed(state,{payload}){
      state.headerConfig = payload
    }
  }
})


export const {changeHeaderFixed} =mainSlice.actions
export default mainSlice.reducer