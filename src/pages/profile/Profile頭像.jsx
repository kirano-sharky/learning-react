import React from 'react'
import './Profile頭像.css'
import ProfileLeft自薦左邊 from '../../components/profileLeft/ProfileLeft自薦左邊'
import ProfileCard頭像卡 from '../../components/profileCard/ProfileCard頭像卡'
import PostSide打卡邊 from '../../components/postSide/PostSide打卡邊'
import RightSide右邊 from '../../components/rightSide/RightSide右邊'

const Profile頭像 = () => {
  return (
    <div className="Profile-頭像">
        <ProfileLeft自薦左邊/>

        <div className="ProfileCenter-頭像中間">
          <ProfileCard頭像卡/>
          <PostSide打卡邊/>
        </div>

        <RightSide右邊/>
    </div>
  )
}

export default Profile頭像