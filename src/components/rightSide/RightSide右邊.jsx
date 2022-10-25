import React from 'react'
import './RightSide右邊.css'
import Home頁面 from '../../img/home.png'
import { UilBell } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilChartBar } from '@iconscout/react-unicons'
import TrendCard推薦卡 from '../trendCard/TrendCard推薦卡'

const RightSide右邊 = () => {
  return (
    <div className="RightSide-右邊">
        <div className="icon圖標">
          <div className="home icon-option">
            <img src={Home頁面}/>
          </div>
          <div className="icon-option">
            <UilSetting/>
          </div>
          <div className="icon-option">
            <UilBell/>
          </div>
          <div className="icon-option">
            <UilMessage/>
          </div>
          <div className="icon-option">
            <UilChartBar/>
          </div>
        </div>

        <TrendCard推薦卡/>

        <button className='button按鈕 s-button'>Share</button>
    </div>
  )
}

export default RightSide右邊
