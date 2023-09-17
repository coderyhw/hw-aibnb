import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Indicator from '@/base-ui/indicator'
import { DemoWrapper } from './style'
import { useState } from 'react'

const Demo = memo(function Demo(props) {

  const names = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  const [selectIndex,setSelectIndex] = useState(0)

  function tabClick(isNext = true){
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if(newIndex < 0) newIndex = names.length - 1
    if(newIndex > names.length -1) newIndex = 0
    setSelectIndex(newIndex)
  }
  
  return (
    <div>
      <div className="control">
        <button onClick={e => tabClick(false)}>上一个</button>
        <button onClick={e => tabClick(true)}>下一个</button>
      </div>
      <DemoWrapper className='list'>
      <Indicator selectIndex={selectIndex}>
        {
          names.map(item => {
            return <button key={item}>{item}</button>
          })
        }
      </Indicator>
      </DemoWrapper>
    </div>
  )
})

Demo.propTypes = {

}

export default Demo
