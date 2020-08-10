import React, { Component } from 'react'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import asyncComponent from '../../util/asyncComponent'
import './index.css'
import home_nor from '../../assets/img/tab_home_nor.png'
import home_hig from '../../assets/img/tab_home_hig.png'
import menu_nor from '../../assets/img/tab_menu_nor.png'
import menu_hig from '../../assets/img/tab_menu_hig.png'
import shopping_nor from '../../assets/img/tab_shopping_nor.png'
import shopping_hig from '../../assets/img/tab_shopping_hig.png'
import me_nor from '../../assets/img/tab_me_nor.png'
import me_hig from '../../assets/img/tab_me_hig.png'
const Home=asyncComponent(()=>import('../Home/Home'))
const Cate=asyncComponent(()=>import('../Cate/Cate'))
const Shoppingcart=asyncComponent(()=>import('../Shoppingcart/Shoppingcart'))
const Mine=asyncComponent(()=>import('../Mine/Mine'))

export default class Index extends Component {
    change(index){
        let footerimg = document.querySelectorAll('.footerimg')
        let footerimg2 = document.querySelectorAll('.footerimg2')
        let p = document.querySelectorAll('.txt')
        for(let i=0;i<footerimg.length;i++){
            footerimg2[i].style.display='none'
            footerimg[i].style.display='inline-block'
            p[i].style.color = '#333'
            footerimg2[index].style.display='inline-block'
            footerimg[index].style.display='none'
            p[index].style.color='#ff9900'

        }
    }

    componentDidMount(){
        let footerimg2 = document.querySelectorAll('.footerimg2')
        for(let i=0;i<footerimg2.length;i++){
            footerimg2[i].style.display='none'
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
                    <NavLink to='/index/home' onClick={()=>this.change(0)}>
                        <img src={home_nor} alt="" className='footerimg'/>
                        <img src={home_hig} alt="" className='footerimg2'/>
                        <p className='txt'>首页</p>
                    </NavLink>
                    <NavLink to='/index/cate' onClick={()=>this.change(1)}>
                    <img src={menu_nor} alt="" className='footerimg'/>
                    <img src={menu_hig} alt="" className='footerimg2'/>
                        <p className='txt'>分类</p>
                    </NavLink>
                    <NavLink to='/index/shoppingcart' onClick={()=>this.change(2)}>
                    <img src={shopping_nor} alt="" className='footerimg'/>
                    <img src={shopping_hig} alt="" className='footerimg2'/>
                        <p className='txt'>购物车</p>
                    </NavLink>
                    <NavLink to='/index/mine' onClick={()=>this.change(3)}>
                    <img src={me_nor} alt="" className='footerimg'/>
                    <img src={me_hig} alt="" className='footerimg2'/>
                        <p className='txt'>我的</p>
                    </NavLink>
                </footer>
            </div>

        )
    }
}
