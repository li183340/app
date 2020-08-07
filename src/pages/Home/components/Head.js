import React, { Component } from 'react'
import u from '../../../assets/img/img/home/logo.jpg'
import './head.css'
export default class Head extends Component {
    render() {
        return (
            <div className='homehead'>
                <div className='logo'>
                    <img src={u} alt=""/>
                    <div className='search'><span>寻找商品</span></div>
                </div> 
            </div>
        )
    }
}
