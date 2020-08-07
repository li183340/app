import React, { Component } from 'react'
import './head.css'
import { Link } from 'react-router-dom'

export default class Head extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div className='head'>{this.props.title}<Link to='/reg'>注册</Link></div>
            </div>
        )
    }
}
