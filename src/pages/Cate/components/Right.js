import React, { Component } from 'react'
import './right.css'
import  {withRouter} from 'react-router-dom'
 class Right extends Component {
    detail(fid){
        this.props.history.push('/cateDetail?fid='+fid)
    }
    render() {
        console.log(this.props.children)
    
        return (
            <div className='right'>
            {this.props.children.map(item=>{
                return (
                <div  className='rightdetail' key={item.id} onClick={()=>this.detail(item.pid)}>
                    <img src={item.img} alt=""/>
                    <p>{item.catename}</p>
                </div>
                )
            })}
                
            </div>
        )
    }
}

export default withRouter(Right)
