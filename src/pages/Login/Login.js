import React, { Component } from 'react'
import Head from './components/head/Head'
import './login.css'
import {httplogin} from '../../util/request'
import { Toast} from 'antd-mobile';
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            title: '登陆',
            user:{
                phone:'',
                password:""
            }
        }

    }

    //弹窗
    showToast(msg) {
        Toast.info(msg, 2);
    }


    change(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }

    login(){
        
        httplogin(this.state.user).then(res=>{
            if(res.data.code===200){
                sessionStorage.setItem('user',JSON.stringify(res.data.list))
                this.props.history.push('/index')
            }else{
                this.showToast(res.data.msg)
            }
        })
    }


    render() {
        const {user}= this.state
        return (
            <div className='login'>
                <Head title={this.state.title}></Head>
                <div className='form'>
                    <div className='int'>
                        <p>账号：</p>
                        <input type="text" value={user.phone} onChange={(e)=>this.change(e,'phone')}/>
                    </div>
                    <div className='int'>
                        <p>密码：</p>
                        <input type="password" value={user.password} onChange={(e)=>this.change(e,'password')}/>
                    </div>
                    <div className='int'>
                        <a href='#' className='foget'>忘记密码</a>
                        <button onClick={()=>this.login()}>登陆</button>
                    </div>
                </div>
            </div>
        )
    }
}
