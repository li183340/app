import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use(res=>{
    console.group('============'+res.config.url+'========')
    console.log(res)
    return res
})

axios.interceptors.request.use(req=>{
    console.log(req)
    if(req.url!=='/api/login'){
        req.headers.authorization = JSON.parse(sessionStorage.getItem('user')).token
    }
    return req
})


//=================会员登录==================
export const httplogin = (params)=>{
    return axios({
        url:'/api/login',
        method:'post',
        data:params
    })
}

//=============会员注册==============
export const httpregister=(params)=>{
    return axios({
        url:'/api/register',
        method:'post',
        data:params
    })
}

//==============banner================
export const httpgetbanner=()=>{
    return axios({
        url:'/api/getbanner',
        method:'get'

    })
}

//================获取商品信息(首页)================
export const httpgetindexgoods=()=>{
    return axios({
        url:'/api/getindexgoods',
        method:"get"
    })
}

//============获取一个商品信息=====================
export const httpgetgoodsinfo=(id)=>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params:{
            id:id
        }
    })
}

//===========================获取分类树形结构======================
export const httpgetcatetree = ()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}

//====================获取分类商品=================
export const httpgetgoods=(fid)=>{
    return axios({
        url:'/api/getgoods',
        method:'get',
        params:{
            fid:fid
        }
    })
}

//==================购物车列表=====================
export const httpcartlist = (uid)=>{
    return axios({
        url:'/api/cartlist',
        method:'get',
        params:{
            uid:uid
        }
    })
}

//=================购物车添加=====================
export const httpcartadd = (params)=>{
    return axios({
        url:'/api/cartadd',
        method:"post",
        data:params
    })
}

//================购物车删除===================
export const httpcartdelete=(id)=>{
    return axios({
        url:'/api/cartdelete',
        method:"post",
        data:{
            id:id
        }
    })
}

//================购物车修改=====================
export const httpcartedit = (params)=>{
    return axios({
        url:'/api/cartedit',
        method:'post',
        data:params
    })
}