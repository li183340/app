import React, { Component } from 'react'
import Head from './components/head/Head'
import {httpregister} from '../../util/request'
import './reg.css'
import { Toast} from 'antd-mobile';

export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                nickname:"",
                password:''
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

    reg(){
        const {user}=this.state
        if(user.phone && user.nickname && user.password){
            httpregister(this.state.user).then(res=>{
                if(res.data.code===200){
                    this.showToast(res.data.msg)
                    this.props.history.push('/login')
                }else{
                    this.showToast(res.data.msg)
                }
        })

        }else{
            this.showToast('请输入内容')
        }
    }

    render() {
        const {user} = this.state
        return (
            <div className='reg'>
                <Head></Head>

                <div className='form'>
                    <div className="int">
                        <p>手机号</p>
                        <input type="text" value={user.phone} onChange={(e)=>this.change(e,'phone')}/>
                    </div>
                    <div className="int">
                        <p>昵称</p>
                        <input type="text" value={user.nickname} onChange={(e)=>this.change(e,'nickname')}/>
                    </div>
                    <div className="int">
                        <p>密码</p>
                        <input type="text" value={user.password} onChange={(e)=>this.change(e,'password')}/>
                    </div>
                    <div className="int">
                        <button onClick={()=>this.reg()}>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}
