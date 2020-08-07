import React, { Component } from 'react'
import {httpgetindexgoods} from '../../../util/request'
import './other.css'
import {filterprice} from '../../../filters/fiter'
import {withRouter} from 'react-router-dom'
 class Other extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        let a = document.documentElement.clientHeight
        document.onscroll=function(){
            let b =document.documentElement.scrollTop
        }
        console.log(a);
        httpgetindexgoods().then(res=>{
            this.setState({
                list:res.data.list[0].content
            })
        })
    }

    detail(id){
        this.props.history.push('/goodsDetail?id='+id)
    }
    render() {
        const {list} = this.state
        return (
            <div className='other'>
                {list.map(item=>{
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
                })}
            </div>
        )
    }
}

export default withRouter(Other)
