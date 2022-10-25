import React from 'react'
import PostSide打卡邊 from '../../components/postSide/PostSide打卡邊'
import ProfileSide頭像 from '../../components/profileSide/ProfileSide頭像'
import RightSide右邊 from '../../components/rightSide/RightSide右邊'
import './Home頁面.css'

const Home頁面 = () => {
  return (
    <div className='Home-頁面'>
        <ProfileSide頭像></ProfileSide頭像>
        <PostSide打卡邊></PostSide打卡邊>
        <RightSide右邊></RightSide右邊>
    </div>
  )
}

export default Home頁面