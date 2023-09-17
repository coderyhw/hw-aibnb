import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DeatilPictures from './c-cpns/detail-prctures'
import DeatilInfo from './c-cpns/deatil-infos'
import { useDispatch } from 'react-redux'
import { changeHeaderFixed } from '@/store/modules/main'

const Detail = memo(function Detail(props) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderFixed({isFixed:false,topAlpha:false}))
  },[dispatch])
  return (
    <DetailWrapper>
      <DeatilPictures/>
      <DeatilInfo/>
    </DetailWrapper>
  )
})



export default Detail
