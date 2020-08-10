import React, { Component } from 'react'
import { httpcartlist, httpcartedit, httpcartdelete } from '../../util/request'
import Head from './components/Head'
import './shoppingcart.css'
import store from '../../assets/img/store.png'
import { filterprice } from '../../filters/fiter'
import radio_nor from '../../assets/img/radio_nor.png'
import radio_hig from '../../assets/img/radio_hig.png'
import editor_nor from '../../assets/img/editor_nor.png'
import editor_hig from '../../assets/img/editor_hig.png'
import { Modal, Toast } from 'antd-mobile';

export default class Shoppingcart extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            all: 0.00,
            n: 0
        }
    }
    componentDidMount() {
        let uid =JSON.parse(sessionStorage.getItem('user')).uid
        console.log(uid)
        httpcartlist(uid).then(res => {
            if(res.data.list){
                this.setState({
                    list: res.data.list
                },)
            }else{
                this.setState({
                    list: [{id:-1}]
                })
            }
            
        })
    }
    
    

    //编辑
    editor() {
        let flex = document.querySelectorAll('.flex')
        let editorimg = document.querySelector('.editorimg')
        if (editorimg.src === editor_nor) {
            for (let i = 0; i < flex.length; i++) {
                flex[i].style.left = 0
            }
            editorimg.src = editor_hig
        } else {
            for (let i = 0; i < flex.length; i++) {
                flex[i].style.left = '0.8rem'
            }
            editorimg.src = editor_nor
        }
    }

    //总价加
    zongjia(index) {
        
        let a = this.state.list[index].price * this.state.list[index].num
        console.log('aaaaaaa'+a)
        this.setState({
            all:this.state.all+a
        },()=>{
            console.log(this.state.all)
        })
    }
    //总价减
    zongjian(index) {
        let a = this.state.list[index].price * this.state.list[index].num
        this.setState({
            all: this.state.all - a
        })
    }

    //勾选
    checkeds(index) {
        let checkboximg = document.querySelectorAll('.checkboximg')
        let allcheckbox = document.querySelector('.allcheckboximg')
        if (checkboximg[index].src === radio_nor) {
            checkboximg[index].src = radio_hig
            this.zongjia(index)
            this.setState({
                n: this.state.n + 1
            }, () => {
                
                if (this.state.n === checkboximg.length) {
                    allcheckbox.src = radio_hig
                }
                console.log(this.state.all,index)
            })
        } else {
            checkboximg[index].src = radio_nor
            this.zongjian(index)
            this.setState({
                n: this.state.n - 1
            }, () => {
                
                if (this.state.n !== checkboximg.length) {
                    allcheckbox.src = radio_nor
                }
            })
        }
        
    }

    //全选
    allcheckboximg() {
        let checkboximg = document.querySelectorAll('.checkboximg')
        let allcheckbox = document.querySelector('.allcheckboximg')
        let m=0
        if (allcheckbox.src === radio_nor) {
            for (let i = 0; i < checkboximg.length; i++) {
                m+= this.state.list[i].price*this.state.list[i].num
                checkboximg[i].src = radio_hig
            }
            this.setState({
                all:m
            })
            this.setState({
                n:checkboximg.length
            })
            allcheckbox.src=radio_hig
        } else {
            for (let i = 0; i < checkboximg.length; i++) {
               
                checkboximg[i].src = radio_nor
            }
            this.setState({
                all:0
            })
            this.setState({
                n:0
            })
            allcheckbox.src=radio_nor
        }
        
    }

    //加
    addnum(id, index) {
        let checkboximgone = document.querySelectorAll('.checkboximg')[index]
        httpcartedit({ id: id, type: 2 }).then(res => { })
        httpcartlist(sessionStorage.getItem('user')).then(res => {
            this.setState({
                list: res.data.list
            }, () => {
                if (checkboximgone.src === radio_hig) {
                    console.log((this.state.list[index].price * this.state.list[index].num))
                    this.setState({
                        all: this.state.all + this.state.list[index].price
                    })
                }
            })
        })
    }
    //减
    jiannum(id, index) {
        let checkboximgone = document.querySelectorAll('.checkboximg')[index]
        let jian = document.querySelector('.jian')
        console.log(this.state.list[index].num);
        if (this.state.list[index].num <= 1) {
            this.showToast('不能再少了')
        } else {
            httpcartedit({ id: id, type: 1 }).then(res => { })
            httpcartlist(sessionStorage.getItem('user')).then(res => {
                this.setState({
                    list: res.data.list
                }, () => {
                    if (checkboximgone.src === radio_hig) {
                        console.log((this.state.list[index].price * this.state.list[index].num))
                        this.setState({
                            all: this.state.all - this.state.list[index].price
                        })
                    }
                })
            })
        }
    }

    //删除
    del(id) {
        const alert = Modal.alert;
        const showAlert = () => {
            const alertInstance = alert('Delete', '确认删除?', [
                { text: '取消', onPress: () => { }, style: 'default' },
                {
                    text: '确定', onPress: () => {
                        httpcartdelete(id).then(res => { })
                        httpcartlist(sessionStorage.getItem('user')).then(res => {
                            if(res.data.list){
                                this.setState({
                                    list: res.data.list
                                },)
                            }else{
                                this.setState({
                                    list: [{id:-1}]
                                })
                            }
                        })
                    }
                },
            ]);
        }
        showAlert()
    }

    showToast(msg) {
        Toast.info(msg, 2);
    }

    

    render() {
        const { list } = this.state

        return (
            <div className="shoppingcart">
                <Head></Head>
                
                {
                    list.map((item, index) => {
                        if(item.id===-1){
                            return <div className='kong' key={item.id}>没有东西哦</div>
                        }
                        return (
                            <div key={item.id} className='datalist'>
                                <p className='cangku'><img src={store} alt="" /><span>杭州保税区仓</span></p>
                                <div className='flex'>
                                    <div className='checkbox' >
                                        <img src={radio_nor} alt="" className='checkboximg' onClick={() => this.checkeds(index)} />
                                    </div>
                                    <img src={item.img} alt="" className='goodsimg' />
                                    <div className='txt'>
                                        <p className='goodsnames'>{item.goodsname}</p>
                                        <div>
                                            <button onClick={() => this.jiannum(item.id, index)} className='jian'>-</button>
                                            <span className='num'>{item.num}</span>
                                            <button onClick={() => this.addnum(item.id, index)}>+</button>
                                        </div>
                                        <p className='allprice'>总价：{filterprice(item.num * item.price)}</p>
                                    </div>
                                    <p className='price'>￥{filterprice(item.price)}</p>
                                    <div className='del'>
                                        <button onClick={() => this.del(item.id)}>删除</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='cartfooter'>
                    <div onClick={() => this.allcheckboximg()}>
                        <img src={radio_nor} className='allcheckboximg' />
                        <p>全选</p>
                    </div>
                    <div onClick={() => this.editor()}>
                        <img src={editor_nor} className='editorimg' />
                        <p>编辑</p>
                    </div>
                    <div>
                        <p>合计：{filterprice(this.state.all)}</p>
            <span>（不含运费）{this.state.n}</span>
                    </div>
                    <button className='btn'>去结算</button>
                </div>

            </div>
        )
    }
}
