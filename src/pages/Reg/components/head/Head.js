import React, { Component } from 'react'
import './head.css'
import Goback from '../../../../components/goback/Goback'
export default class Head extends Component {
    render() {
        return (
            <div>
                <div className='head'><Goback></Goback>注册</div>
            </div>
        )
    }
}
