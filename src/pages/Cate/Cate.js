import React, { Component } from 'react'
import Head from './components/Head'
import './cate.css'
import {httpgetcatetree} from '../../util/request'
import Right from './components/Right'
export default class Cate extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            children:[]
        }
    }


    categoods(children,index){
            this.setState({
                children:children
            })
            let li = document.querySelectorAll('li')
            console.log(li)
            for(let i=0;i<li.length;i++){
                li[i].className='';
                li[index].className='liborder'
            }
    
        
    }

    componentDidMount(){
        httpgetcatetree().then(res=>{
            this.setState({
                list:res.data.list
            },()=>{
                this.categoods(res.data.list[0].children,0)
                
            })
        })
    }

   
    render() {
        const {list} = this.state
        return (
            <div>
                <Head></Head>
                <div className='cate'>
                    <div className='cateleft'>
                        <ul>
                            {
                                list.map((item,index)=>{
                                    return (
                                    <li key={item.id} onClick={()=>this.categoods(item.children,index)}>{item.catename}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='cateright'>
                        <Right children={this.state.children}></Right>
                    </div>
                </div>
            </div>
        )
    }
}
