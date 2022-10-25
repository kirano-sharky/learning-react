import React from 'react'
import './RightSide右邊.css'
import Home頁面 from '../../img/home.png'
import Noti通知 from '../../img/noti.png'
import Message訊息 from '../../img/message.png'
import { UilSetting } from '@iconscout/react-unicons'
import Htag from '../../img/htag.png'
import TrendCard推薦卡 from '../trendCard/TrendCard推薦卡'

const RightSide右邊 = () => {
  return (
    <div className="RightSide-右邊">
        <div className="icon圖標">
            <img src={Home頁面}/>
            <UilSetting/>
            <img src={Noti通知}/>
            <img src={Message訊息}/>
            <img src={Htag}/>
        </div>

        <TrendCard推薦卡/>

        <button className='button按鈕 s-button'>Share</button>
    </div>
  )
}

export default RightSide右邊