import React, { Component } from 'react'
import querystring from 'querystring'
import {httpgetgoodsinfo} from '../../util/request'
export default class GoodsDetail extends Component {
    constructor(){
        super()
        this.state={
            data:{}
        }
    }
    componentDidMount(){
       let id =querystring.parse(this.props.location.search.slice(1)).id
       httpgetgoodsinfo(id).then(res=>{
           this.setState({
               data:res.data.list[0]
           })
       })
    }
    render() {
        return (
            <div>
                <img src="" alt="" className='imgs'/>
                <div className='goods'>
                    <p></p>
                    <div>
                        <span></span>
                        <p>收藏</p>
                    </div>
                </div>
                <div className='price'>
                    <div>
                    <b>price</b>
                    <span></span>
                    <span></span>
                    </div>
                    <p>mkp</p>
                </div>
                <div className='detail'>
                    详情
                </div>
            </div>
        )
    }
}
