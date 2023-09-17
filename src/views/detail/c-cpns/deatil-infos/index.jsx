import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { InfoWrapper } from './style'

const DeatilInfo = memo(function DeatilInfo(props) {
  
  const {detailInfo} = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)

  return (
    <InfoWrapper>
      {detailInfo.name}
    </InfoWrapper>
  )
})

DeatilInfo.propTypes = {

}

export default DeatilInfo
