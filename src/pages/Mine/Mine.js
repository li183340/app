import React, { Component } from 'react'
import './mine.css'
import set from '../../assets/img/set.png'
import news from '../../assets/img/news.png'
import one from '../../assets/img/1.jpg'
import keep from '../../assets/img/keep.png'
import icon_refund from '../../assets/img/icon_refund.png'
export default class Mine extends Component {
    render() {
        let nickname = JSON.parse(sessionStorage.getItem('user')).nickname
        return (
            <div>
                <header>
                    <div className='minehead'>
                        <img src={set} alt=""/>
                        <p>个人中心</p>
                        <img src={news} alt=""/>
                    </div>
                    
                </header>
                <div className='oneimg'><img src={one} alt="" /></div>
        
                <div>
                    <p className='wite'>{nickname}</p>
                    <div className='souchang'>
                        <img src={keep} alt=""/><span>我的收藏（5）</span>
                    </div>
                </div>
                <div className='dingdan'>
                    <p>我的订单</p>
                    <p>查看订单</p>
                </div>
                <div className='refund'>
                        <ul>
                            <li>
                                <img src={icon_refund} alt=""/>
                                <p>待收货</p>
                            </li>
                            <li>
                                <img src={icon_refund} alt=""/>
                                <p>待收货</p>
                            </li>
                            <li>
                                <img src={icon_refund} alt=""/>
                                <p>待收货</p>
                            </li>
                            <li>
                                <img src={icon_refund} alt=""/>
                                <p>待收货</p>
                            </li>
                            <li>
                                <img src={icon_refund} alt=""/>
                                <p>待收货</p>
                            </li>
                        </ul>
                </div>
                <div className='dizhi'>收货地址管理</div>
            </div>
        )
    }
}
