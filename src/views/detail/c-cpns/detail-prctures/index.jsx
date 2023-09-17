import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { PrcturesWrapper } from './style'
import PrctureBrower from '@/base-ui/prcture-browser'

const DeatilPictures = memo(function DeatilPictures(props) {
  const [showBrower,setShowBorwer] = useState(false)

  const {detailInfo} = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)

  return (
    <PrcturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBorwer(true)}>
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls.slice(1,5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setShowBorwer(true)}>
                  <img src={item} alt="" />
                <div className="cover"></div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={e => setShowBorwer(true)}>显示照片</div>
      {showBrower && <PrctureBrower prictureUrls={detailInfo.picture_urls} closeClick={e => setShowBorwer(false)} />}
    </PrcturesWrapper>
  )
})

DeatilPictures.propTypes = {

}

export default DeatilPictures
