import React from 'react'
import './Posts多打卡.css'
import { PostsData } from '../../Data/postsData'
import Post打卡 from '../post/Post打卡'

const Posts多打卡 = () => {
  return (
    <div className="Posts-多打卡">
      {PostsData.map((post, id) => {
        return <Post打卡 情報={post} id={id}/>
      })}
    </div>
  )
}

export default Posts多打卡

