import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import { render } from '@testing-library/react'

//重定向组件
// 如果访问某个组件时，如果有重定向组件，那么就会修改页面路径，使得页面内容显示为定向路径的内容
function LoginInfo(props) {
    if(props.loginState == 'success') {
        return <Redirect to = "/admin"></Redirect>
    } else {
        return <Redirect to = "/login"></Redirect>
    }
}

function SecondCom () {
        return (
            <div>
                <Router>
                    <Route path = "/" exact component = {() => (<h1> 首页 </h1>)}></Route>
                    <Route path = "/form" exact component = {() => (<h1> 表单验证 </h1>)}></Route>
                    <Route path = "/login" exact component = {() => (<h1> 登录页</h1>)}></Route>
                </Router>
            </div>
        )
}

export default SecondCom
