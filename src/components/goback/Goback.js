import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import './goback.css'
 class Goback extends Component {

    goback(){
        this.props.history.goBack()
    }
    render() {
        return (
            <div className='goback'>
                <span onClick={()=>this.goback()}>返回</span>
            </div>
        )
    }
}

export default withRouter(Goback)
