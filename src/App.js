import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import asyncComponent from './util/asyncComponent'
import MyRoute from './components/MyRote/MyRoute'

const Login = asyncComponent(()=>import('./pages/Login/Login'))
const Reg = asyncComponent(()=>import('./pages/Reg/Reg'))
const Index = asyncComponent(()=>import('./pages/Index/Index'))
const Goods = asyncComponent(()=>import('./pages/Goods/Goods'))
const GoodsDetail = asyncComponent(()=>import('./pages/GoodsDetail/GoodsDetail'))
const CateDetail = asyncComponent(()=>import('./pages/CateDetail/CateDetail'))
function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/reg" component={Reg}></Route>
          <MyRoute path='/index' component={Index}></MyRoute>
          <MyRoute path='/goods' component={Goods}></MyRoute>
          <MyRoute path='/goodsDetail' component={GoodsDetail}></MyRoute>
          <MyRoute path='/cateDetail' component={CateDetail}></MyRoute>
          <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
