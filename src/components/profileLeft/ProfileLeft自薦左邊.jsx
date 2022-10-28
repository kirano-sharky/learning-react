import React from 'react'
import LogoSearch標志搜尋 from '../logoSearch/LogoSearch標志搜尋'
import FollwerCard跟隨者卡 from '../followerCard/FollowerCard跟隨者卡'
import InfoCard介紹卡 from '../infoCard/InfoCard介紹卡'

const ProfileLeft自薦左邊 = () => {
  return (
    <div className="ProfileLeft-自薦左邊">
      <LogoSearch標志搜尋/>
      <InfoCard介紹卡/>
      <FollwerCard跟隨者卡/>
    </div>
  )
}

export default ProfileLeft自薦左邊