import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use(res=>{
    console.group('============'+res.config.url+'========')
    console.log(res)
    return res
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