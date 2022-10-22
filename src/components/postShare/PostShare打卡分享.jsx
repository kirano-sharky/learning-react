import React, { useState, useRef } from 'react'
import ProfileImg頭像Img from '../../img/profileImg.png'
import './PostShare打卡分享.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const PostShare打卡分享 = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage ({
        image_圖像: URL.createObjectURL(img),
      })
    }
  }
  return (
    <div className="PostShare-打卡分享">
        <img src={ProfileImg頭像Img} alt=''/>
        <div>
            <input type='text' placeholder="Tell us something else?"/>
            <div className="PostOption-打卡選項">
              <div className="Option-打卡" style={{color: 'var(--photo)'}} onClick={() => imageRef.current.click()}>
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
              <button className='button按鈕 ps-button'>
                Share
              </button>
              <div style={{display: 'none'}}>
                <input type='file' name='myImage' ref={imageRef} onChange={onImageChange}/>
              </div>
           </div>
           {image && (
              <div className="PreviewImage-預覽圖畫">
                <UilTimes onClick={()=>setImage(null)}/>
                <img src={image.image_圖像} alt=''/>
              </div>
           )}
        </div>
    </div>
  )
}

export default PostShare打卡分享