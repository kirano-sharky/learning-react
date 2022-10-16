import React from 'react'
import Cover覆蓋 from '../../img/cover.jpg'
import Profile頭像 from '../../img/profileImg.png'
import './ProfileCard頭像卡.css'

const ProfileCard頭像卡 = () => {
  return (
    <div className="ProfileCard-頭像卡">
      <div className="ProfileImage-頭像圖像">
        <img src={Cover覆蓋} alt=''/>
        <img src={Profile頭像} alt=''/>
      </div>
    </div>
  )
}

export default ProfileCard頭像卡