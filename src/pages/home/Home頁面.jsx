import React from 'react'
import ProfileSide頭像 from '../../components/profileSide/ProfileSide頭像'
import './Home頁面.css'

const Home頁面 = () => {
  return (
    <div className='Home-頁面'>
        <ProfileSide頭像></ProfileSide頭像>
        <div className="postSide-打卡">Posts</div>
        <div className="rightSide-右邊">Rightside</div>
    </div>
  )
}

export default Home頁面