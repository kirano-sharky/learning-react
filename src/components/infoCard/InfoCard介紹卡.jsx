import React from 'react'
import './InfoCard介紹卡.css'
import { UilPen } from '@iconscout/react-unicons'

const InfoCard介紹卡 = () => {
  return (
    <div className="InfoCard-介紹卡">
        <div className="head">
            <h4>Your Info!</h4>
            <UilPen/>
        </div>

        { /*狀態*/ }
        <div className="info">
            <span><b>Status</b></span>
            <span>in Relationship</span>
        </div>

        { /*城市*/ }
        <div className="info">
            <span><b>Lives in</b></span>
            <span>Malaysia</span>
        </div>
        
        { /*工作*/ }
        <div className="info">
            <span><b>Works at</b></span>
            <span>My house</span>
        </div>

        <button className='button按鈕'>Log out!</button>
    </div>
  )
}

export default InfoCard介紹卡