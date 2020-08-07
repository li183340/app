import React, { Component } from 'react'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import asyncComponent from '../../util/asyncComponent'
import './index.css'
const Home=asyncComponent(()=>import('../Home/Home'))
const Cate=asyncComponent(()=>import('../Cate/Cate'))
const Shoppingcart=asyncComponent(()=>import('../Shoppingcart/Shoppingcart'))
const Mine=asyncComponent(()=>import('../Mine/Mine'))

export default class Index extends Component {
    change1(){
        let span = document.querySelectorAll('span')
        let p = document.querySelectorAll('p')
        for(let i=0;i<4;i++){
            if(i===0){
             span[i].className = 'imgs'+(i+1)
              p[i].className ='txtcolor'

            }else{
                span[i].className = 'img'+(i+1)
                p[i].className ='txt'+(i+1)
            }
        }
    }
    change2(){
        let span = document.querySelectorAll('span')
        let p = document.querySelectorAll('p')
        for(let i=0;i<4;i++){
            if(i===1){
             span[i].className = 'imgs'+(i+1)
              p[i].className ='txtcolor'

            }else{
                span[i].className = 'img'+(i+1)
                p[i].className ='txt'+(i+1)
            }
        }
    }
    change3(){
        let span = document.querySelectorAll('span')
        let p = document.querySelectorAll('p')
        for(let i=0;i<4;i++){
            if(i===2){
             span[i].className = 'imgs'+(i+1)
              p[i].className ='txtcolor'

            }else{
                span[i].className = 'img'+(i+1)
                p[i].className ='txt'+(i+1)
            }
        }
    }
    change4(){
        let span = document.querySelectorAll('span')
        let p = document.querySelectorAll('p')
        for(let i=0;i<4;i++){
            if(i===3){
             span[i].className = 'imgs'+(i+1)
              p[i].className ='txtcolor'

            }else{
                span[i].className = 'img'+(i+1)
                p[i].className ='txt'+(i+1)
            }
        }
    }


    render() {
        
        return (
            <div className='index'>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/cate' component={Cate}></Route>
                    <Route path='/index/shoppingcart' component={Shoppingcart}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                    <Redirect to='/index/home'></Redirect>
                </Switch>
                <footer>
                    <NavLink to='/index/home' onClick={()=>this.change1()}>
                        <span className='img1'></span>
                        <p className='txt1'>首页</p>
                    </NavLink>
                    <NavLink to='/index/cate' onClick={()=>this.change2()}>
                        <span className='img2'></span>
                        <p className='txt2'>分类</p>
                    </NavLink>
                    <NavLink to='/index/shoppingcart' onClick={()=>this.change3()}>
                        <span className='img3'></span>
                        <p className='txt3'>购物车</p>
                    </NavLink>
                    <NavLink to='/index/mine' onClick={()=>this.change4()}>
                        <span className='img4'></span>
                        <p className='txt4'>我的</p>
                    </NavLink>
                </footer>
            </div>

        )
    }
}
