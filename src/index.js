import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; 
// 导入APP 渲染
import * as serviceWorker from './serviceWorker';

// let app = <App/>;
// let he = <h1>Hello</h1>;
// 使用jsx写法，写出元素  注意  jsx组件 或元素 必须只有一个根

// let root = document.getElementById('root');
//  ReactDOM.render(he,root);
// ReactDOM.render(
//   //jsx语法   <APP /> JS普通对象
//   // <React.StrictMode>
//   //   <App/>
//   // </React.StrictMode>,
//   // document.getElementById('root')
//   app,he,root
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//间歇式开发 serviceWorker 如果你有内容 就会被缓存

//实现页面时刻的显示
// function clock(){
//   let time = new Date().toLocaleTimeString();
// let element =(
//               <div>
//                   <h1>现在的时间是：{time}</h1>
//                   <h2>shenshi</h2>
//               </div>
//               )
// let root = document.querySelector('#root');
// ReactDOM.render(element,root)

// }
// clock();  
// setInterval(clock,1000)

// 函数式组件 
// function Clock(props){
//   return(
//           <div>
//             <h1>现在时间是{props.date.toLocaleTimeString()}</h1>
//             <h2>这是函数式组件 名字首字母必须大写</h2>
//           </div>
//         )
// }
// function run(){
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.querySelector('#root')
//   )
// }
// setInterval(run,1000) 

// function Clock(pro){
//   return(
//     // 必须放在一个容器里 必须要有一个根节点 首字母大写的默认为组件 普通的都是小写
//           <div>
//               <h1>现在时间是{pro.date.toLocaleTimeString()}</h1>,
//                <h2>这是传参的函数式组件</h2>
//           </div>
            
         
//   )
// }
// // getElementById是DOM元素查找方式 由于reactDom.render不是一个有节点的容器，因此只能用querySelector 来取选择器
// function run(){
//   ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.querySelector('#root')
//   )
// }

// setInterval(run,1000);


// let time = new Date().toLocaleTimeString();
// let str = "现在的时间是："
// let element = (
//     <div>
//       <h1>hello</h1>
//       <h2>{str+time}</h2>
//     </div>
// )
// let man = "git"
// let element2 = (
//   <div>
//     <h1>今天学会了什么</h1>
//     <h2>{man === "react"?<button>"git"</button>:"react"}</h2>
//   </div>
// )

// let element3 = (
//   <div>
//     <span>学习是一天</span>
//     <br />
//     <span>不学习也是一天</span>
//   </div>
// ) 
// let element4 = (
//   <div>
//     <h1>今天学会了什么</h1>
//     <h2>{man === "react"?<button>"git"</button>:element3}</h2>
//   </div>
// )

// let color = 'bgRed';
// // 样式必须必须加‘’
// let element5 = (
//   // 样式类名必须写 className
//   <div className = {color}>
//     <img alt="显示图片" src="https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc31137974de55df8db1cb13704b?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5" />
//   背景
//   </div>
// )
// ReactDOM.render(element5, document.getElementById('root'));
// console.log(element3);


// let exampleStyle = {
//   background: "skyblue",
//   borderBottom: "1px solid red"
// }
// let element = (
//   <div>
//     <h1 style= {exampleStyle}>hello</h1>
//   </div>
// )

let element2 = (
  <div>
  <h1 className = {'bgRed'}>hi</h1>
  </div>
)
ReactDOM.render(
  element2,
  document.querySelector('#root')
)
// 为什么有时候用getElementID 有时候又用querySelector 这两者又什么区别么
