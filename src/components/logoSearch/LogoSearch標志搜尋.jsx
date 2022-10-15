import React from 'react' 
import Logo標志 from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch標志搜尋.css'

const LogoSearch標志搜尋 = () => {
  return (
    <div className="LogoSearch-標志搜尋">
        <img src={Logo標志} alt=''/>
        <div className="Search-搜尋">
            <input type="text" placeholder='#Explore'/>
            <div className="s-icon-s-圖標">
                <UilSearch></UilSearch>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch標志搜尋