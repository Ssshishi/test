import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Home () {
    return (
        <div>
            <h1> 首页 </h1>
        </div>
    )
}

function Good (){
    return (
        <div>
            <h1> 商品页面 </h1>
        </div>
    )
}

function Personal (){
    return (
        <div>
            <h1> 个人页面 </h1>
        </div>
    )
}

function FirstCom () {
    return (
        <div id = "first">
            {/* 点击Link 跳转到不同的页面 */}
            <Router>
                <div className = "nav">
                    <Link to = "/">Home</Link>
                    <Link to = "/product">Good</Link>
                    <Link to = "/me">Personal</Link>
                </div>
                {/* 将组件内容 通过 Route 写在 不同路径的页面里面 */}
                <Route path = "/" exact  component =  {Home} ></Route>
                <Route path = "/product" exact  component =  {Good} ></Route>
                <Route path = "/me" exact  component =  {Personal} ></Route>
            </Router>

        </div>
    )
}

export default FirstCom;