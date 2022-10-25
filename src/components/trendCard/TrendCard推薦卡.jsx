import React from 'react'
import './TrendCard推薦卡.css'
import { Trend推薦 } from '../../Data/trendsData'

const TrendCard推薦卡 = () => {
  return (
    <div className="TrendCard-推薦卡">
        <h3>Trends for you~</h3>
        {Trend推薦.map((推薦) => {
            return (
                <div className="trend推薦">
                    <span className='推薦内容'><b>#{推薦.名字}</b></span>
                    <span>{推薦.分享} shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard推薦卡