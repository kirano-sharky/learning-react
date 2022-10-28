import React from 'react'
import Cover覆蓋 from '../../img/cover.jpg'
import Profile頭像 from '../../img/profileImg.png'
import './ProfileCard頭像卡.css'

const ProfileCard頭像卡 = () => {
  const ProfilePage頭像界面 = true;
  return (
    <div className="ProfileCard-頭像卡">
      <div className="ProfileImage-頭像圖像">
        <img src={Cover覆蓋} alt=''/>
        <img src={Profile頭像} alt=''/>
      </div>

      <div className="ProfileName-頭像名字">
        <span>WinsonOTP</span>
        <span>Senior Bot Designer</span>
      </div>

      <div className="FollowStatus-跟隨狀態">
        <hr/>
        <div>
          { /*Follower*/ }
          <div className="Follow-跟隨">
            <span>614</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          { /*Following*/ }
          <div className="Follow-跟隨">
            <span>1</span>
            <span>Following</span>
          </div>
          { /*Post*/ }
          {ProfilePage頭像界面 && (
            <>
            <div className="vl"></div>
            <div className="Follow-跟隨">
              <span>7</span>
              <span>Posts</span>
            </div>
            </>
          )}
        </div>
        <hr/>
      </div>

      {ProfilePage頭像界面? '': <span>My Profile</span>}

    </div>
  )
}

export default ProfileCard頭像卡