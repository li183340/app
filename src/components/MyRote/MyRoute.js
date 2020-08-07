import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom' 
export default class MyRoute extends Component {
    render() {
        const isLogin = sessionStorage.getItem('user')
        return (
            <div>
                {
                    <Route {...this.props}></Route>
                }
            </div>
        )
    }
}

