import React from 'react'
import ProfileImg頭像Img from '../../img/profileImg.png'
import './PostShare打卡分享.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UiPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UiSchedule } from '@iconscout/react-unicons'

const PostShare打卡分享 = () => {
  return (
    <div className="PostShare-打卡分享">
        <img src={ProfileImg頭像Img} alt=''/>
        <div>
            <input type='text' placeholder="What's happening"/>
        </div>
        <div className="Option選項">
            <UilScenery/>
        </div>
    </div>
  )
}

export default PostShare打卡分享