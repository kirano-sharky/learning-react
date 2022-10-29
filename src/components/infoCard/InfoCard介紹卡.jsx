import React from 'react'
import './InfoCard介紹卡.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal頭像模態 from '../profileModal/ProfileModal頭像模態'
import { useState } from 'react'

const InfoCard介紹卡 = () => {
  const [modalOpened , setModalOpened] = useState(false)
  return (
    <div className="InfoCard-介紹卡">
        <div className="head">
            <h4>Your Info!</h4>
            <div className="edit編輯">
                <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)}/>
                <ProfileModal頭像模態 modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>

        { /*狀態*/ }
        <div className="info">
            <span><b>Status </b></span>
            <span>in Relationship</span>
        </div>

        { /*城市*/ }
        <div className="info">
            <span><b>Lives in </b></span>
            <span>Malaysia</span>
        </div>
        
        { /*工作*/ }
        <div className="info">
            <span><b>Works at </b></span>
            <span>My house</span>
        </div>

        <button className='button按鈕 logoutButton退出按鈕'>Log out!</button>
    </div>
  )
}

export default InfoCard介紹卡

