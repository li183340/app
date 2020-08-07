import React, { Component } from 'react'
import Head from './components/Head'
import Banner from './components/Banner'
import Other from './components/Other'
import qiang from '../../assets/img/img/home/1.jpg'
import './home.css'
export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Head></Head>
                <Banner></Banner>
                <div className='adv'>
                    <div>
                    <img src={qiang} alt=""/>
                    <p>限时抢购</p>
                    </div>
                    <div>
                    <img src={qiang} alt=""/>
                    <p>积分商城</p>
                    </div>
                    <div>
                    <img src={qiang} alt=""/>
                    <p>联系我们</p>
                    </div>
                    <div>
                    <img src={qiang} alt=""/>
                    <p>商品分类</p>
                    </div>
                </div>
                <Other></Other>
            </div>
        )
    }
}
