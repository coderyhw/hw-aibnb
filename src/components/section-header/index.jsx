import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

const SecitonHeader = memo(function SecitonHeader(props) {
  
  const { title,subtitle } = props
  
  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <h2 className='subtitle'>{subtitle}</h2>}
      {/* <div className='subtitle'>{subtitle}</div> */}
    </HeaderWrapper>
  )
})

SecitonHeader.propTypes = {
  title:PropTypes.string,
  subtitle:PropTypes.string
}

export default SecitonHeader
