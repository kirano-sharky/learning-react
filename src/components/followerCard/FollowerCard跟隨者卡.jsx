import React from 'react'
import './FollowerCard跟隨者卡.css'

import { Follower跟隨者 } from '../../Data/followersData'
const FollowerCard跟隨者卡 = () => {
  return (
    <div className="FollowerCard-跟隨者卡">
        <h3>Who is following you</h3>

        {Follower跟隨者.map((follower, id)=> {
            return (
                <div className="follower">
                    <div>
                        <img src={follower.img} alt='' className='FollowerImg-跟隨者圖片'/>
                        <div className="name名字">
                            <span>{follower.名字}</span>
                            <span>{follower.用戶名稱}</span>
                        </div>
                    </div>
                    <button>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowerCard跟隨者卡