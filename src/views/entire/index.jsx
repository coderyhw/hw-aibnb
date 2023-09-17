import React, { memo, useEffect } from 'react'
import { EntrieWrapper } from './style'
import EntrieFilter from './c-cpns/entrie-filter'
import EntrieRooms from './c-cpns/entrie-rooms'
import EntriePageNation from './c-cpns/entrie-pagenation'
import { useDispatch } from 'react-redux'
import { fetchRoomList } from '@/store/modules/entire/createActions'
import { changeHeaderFixed } from '@/store/modules/main'

export default memo(function Entire() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomList())
    dispatch(changeHeaderFixed({isFixed:true,topAlpha:false}))
  },[dispatch])


  return (
    <EntrieWrapper>
      <EntrieFilter/>
      <EntrieRooms/>
      <EntriePageNation/>
    </EntrieWrapper>
  )
})
