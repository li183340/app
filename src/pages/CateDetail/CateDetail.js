import React, { Component } from 'react'
import querystring from 'querystring'
import {httpgetgoods} from '../../util/request'
import Head from './components/Head'
import {filterprice} from '../../filters/fiter'
import './catedetail.css'
export default class CateDetail extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        let fid = querystring.parse(this.props.location.search.slice(1)).fid
        httpgetgoods(fid).then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }

    detail(id){
        this.props.history.push('/goodsDetail?id='+id)
    }
    render() {
        const {list} = this.state
        return (
            <div className='catedetail'>
                <Head></Head>
                {
                    list.map(item=>{
                        return (
                        <div className='wrap' key={item.id} onClick={()=>this.detail(item.id)}>
                            <img src={item.img} alt=""/>
                            <div className='box'>
                                <h4>{item.goodsname}</h4>
                                <p>￥{filterprice(item.price)}</p>
                                <button>立即抢购</button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
