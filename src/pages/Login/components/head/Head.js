import React, { Component } from 'react'
import './head.css'
import { Link } from 'react-router-dom'

export default class Head extends Component {
    
        
    render() {
        return (
            <div>
                <div className='head'>登陆<Link to='/reg'>注册</Link></div>
            </div>
        )
    }
}
