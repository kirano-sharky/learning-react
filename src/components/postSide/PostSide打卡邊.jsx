import React from 'react'
import Posts多打卡 from '../posts/Posts多打卡'
import PostShare打卡分享 from '../postShare/PostShare打卡分享'
import './PostSide打卡邊.css'

const PostSide打卡邊 = () => {
  return (
    <div className="PostSide-打卡邊">
        <PostShare打卡分享></PostShare打卡分享>
        <Posts多打卡></Posts多打卡>
    </div>
  )
}

export default PostSide打卡邊