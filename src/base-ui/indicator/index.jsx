import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'
import { useEffect } from 'react'
import { useRef } from 'react'

const Indicator = memo(function Indicator(props) {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {

    const selectItemEle = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEle?.offsetLeft
    const itemWidth = selectItemEle?.clientWidth

    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth


    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    
    if(distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`

  },[selectIndex])
  
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex:PropTypes.number
}

export default Indicator
