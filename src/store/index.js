import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './modules/main'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailsReducer from './modules/details'

const store = configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer,
    detail:detailsReducer,
    main:mainSlice
  }
})

export default store