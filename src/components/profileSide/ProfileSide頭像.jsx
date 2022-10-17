import React from 'react'
import LogoSearch標志搜尋 from '../logoSearch/LogoSearch標志搜尋'
import ProfileCard頭像卡 from '../profileCard/ProfileCard頭像卡'

import './ProfileSide頭像.css'
const ProfileSide頭像 = () => {
  return (
    <div className="ProfileSide-頭像">
        <LogoSearch標志搜尋></LogoSearch標志搜尋>
        <ProfileCard頭像卡></ProfileCard頭像卡>
    </div>
  )
}

export default ProfileSide頭像