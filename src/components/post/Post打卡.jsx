import React from 'react'
import './Post打卡.css'
import Comment留言 from '../../img/comment.png'
import Share分享 from '../../img/share.png'
import Like喜歡 from '../../img/like.png'
import NotLike不喜歡 from '../../img/notlike.png'

const Post打卡 = ({情報}) => {
  return (
    <div className="Post-打卡">
      <div>
        <img src={情報.profile} className='profile_頭像'/>
        <span className='name名字'>{情報.名字}</span>
      </div>
      <img src={情報.img} alt=''/>

      <div className="PostProject-打卡主題">
        <span>Discord 機器人開發日誌 - DAY 10</span>
      </div>
      
      <div className="PostReact-打卡反應">
      <img src={情報.likes?Like喜歡: NotLike不喜歡}/>
        <img src={Comment留言}/>
        <img src={Share分享}/>
      </div>

      <span>{情報.likes} likes</span>

      <div className="Detail-詳情">
        <span><b>{情報.名字}</b></span>
        <span>{情報.内容}</span>
      </div>
    </div>
  )
}

export default Post打卡