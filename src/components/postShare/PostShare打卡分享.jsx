import React from 'react'
import ProfileImg頭像Img from '../../img/profileImg.png'
import './PostShare打卡分享.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'

const PostShare打卡分享 = () => {
  return (
    <div className="PostShare-打卡分享">
        <img src={ProfileImg頭像Img} alt=''/>
        <div>
            <input type='text' placeholder="Tell us something else?"/>
            <div className="PostOption-打卡選項">
              <div className="Option-打卡" style={{color: 'var(--photo)'}}>
                <UilScenery/>
                Photo
              </div>
              <div className="Option-打卡" style={{color: 'var(--video)'}}>
                <UilPlayCircle/>
                Video
              </div>
              <div className="Option-打卡" style={{color: 'var(--location)'}}>
                <UilLocationPoint/>
                Location
              </div>
              <div className="Option-打卡" style={{color: 'var(--schedule)'}}>
                <UilSchedule/>
                Schedule
              </div>
           </div>
        </div>
    </div>
  )
}

export default PostShare打卡分享