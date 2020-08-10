import React, { Component } from 'react'
import querystring from 'querystring'
import { httpgetgoodsinfo,httpcartadd} from '../../util/request'
import './goodsDetail.css'
import { filterprice } from '../../filters/fiter'
import { Modal, List,  WhiteSpace, WingBlank, Toast} from 'antd-mobile';
import Head from './components/Head'
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}



export default class GoodsDetail extends Component {
    constructor() {
        super()
        this.state = {
            data: {},
            modal1: false,
            modal2: false,
            arr: [],
            num:0,
        }
    }
    // 节点.classList.add("类名")
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    componentDidMount() {
        let id = querystring.parse(this.props.location.search.slice(1)).id
        httpgetgoodsinfo(id).then(res => {
            this.setState({
                data: res.data.list[0],
            }, () => {
                let description = document.querySelector('.detail')
                description.innerHTML = this.state.data.description
            })
            this.setState({
                arr: JSON.parse(res.data.list[0].specsattr)
            })
        })

    }
    //选择属性
    atter(index) {
        let span = document.querySelectorAll('.specsattr')

        if (getComputedStyle(span[index]).color === 'rgb(255, 153, 0)') {
            span[index].classList.remove('active')
        } else {
            span[index].classList.add('active')
        }
        
    }

    //加入购物车
    shoppingadd(){
        let uid = JSON.parse(sessionStorage.getItem('user')).uid
        let id = querystring.parse(this.props.location.search.slice(1)).id
        this.setState({
            num:this.state.num+1
        },()=>{
            httpcartadd({uid:uid,goodsid:id,num:this.state.num}).then(res=>{
                if(res.data.code===200){
                    this.showToast(res.data.msg)
                }else{
                    this.showToast(res.data.msg)
                }
            })
        })
        
    }

    //弹窗
    showToast(msg) {
        Toast.info(msg, 2);
    }

    render() {
        const { data, arr } = this.state
        return (
            <div className='goodsDetail'>
                <Head></Head>
                <img src={data.img} alt="" className='imgs' />
                <div className='goods'>
                    <p>{data.goodsname}</p>
                    <div className='collect'>
                        <span></span>
                        <p>收藏</p>
                    </div>
                </div>
                <div className='price'>
                    <div>
                        <b>￥{filterprice(data.price + 0)}</b>
                        <span>热卖</span>
                        <span>新品</span>
                    </div>
                    <p>￥{filterprice(data.market_price + 0)}</p>
                </div>
                <div className='detail'></div>

                <div className='cart'>
                    <p onClick={this.showModal('modal2')}>加入购物车</p>
                </div>
                <WingBlank>
                    
                    <WhiteSpace />
                    <Modal
                        popup
                        visible={this.state.modal2}
                        onClose={this.onClose('modal2')}
                        animationType="slide-up"
                    >
                        <List className="popup-list">
                            <div className='alert'>
                                <div className='goodsname'>
                                    <img src={data.img} alt="" />
                                    <p>{data.goodsname}</p>
                                </div>
                                <div className='specsname'>
                                    <h3>{data.specsname}</h3>
                                    {
                                        arr.map((item, index) => {
                                            return <span key={item} className='specsattr' onClick={() => this.atter(index)}>{item}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <List.Item className='btn'>
                                <p onClick={this.onClose('modal2')} className='addgoodsdetail'><span onClick={() => this.shoppingadd()}>加入购物车</span></p>
                            </List.Item>
                        </List>
                    </Modal>
                </WingBlank>

            </div>
        )
    }
}
