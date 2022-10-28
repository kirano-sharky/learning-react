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
        <span>{情報.主題}</span>
      </div>
      
      <div className="PostReact-打卡反應">
      <img src={情報.liked?Like喜歡: NotLike不喜歡}/>
        <img src={Comment留言}/>
        <img src={Share分享}/>
      </div>

      <span className='like喜歡' style={{fontSize: '16px', fontWeight: 'bold'}}>{情報.likes} likes</span>

      <div className="PostDetail-打卡詳情">
        <span><b>{情報.留言者1}</b> {情報.留言1}</span>
        <span><b>{情報.留言者2}</b> {情報.留言2}</span>
        <span className='viewAll展開'>View all comments...</span>
      </div>
    </div>
  )
}

export default Post打卡