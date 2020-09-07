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
//   borderBottom: "1px solid red",
//   backgroundImage: "url(https://pic4.zhimg.com/v2-2e0b4141d45c51f5c2eb9f601ecd3b91_xll.jpg)"
// }
// let element = (
//   <div>
//     <h1 style= {exampleStyle}>hello</h1>
//   </div>
// )
// let classNamejia = ['a','b'].join(" ")
// let element2 = (
//   <div>
//     {/** 注释必须在括号里面 */}
//   <h1 className = {'a'} style = {exampleStyle}>你好</h1>
//   <h1 className = {`${color} b`}>注释和样式表示</h1>
//   <p className={classNamejia}>
//       我今天学会了什么呢
//   </p>
//   </div>
// )
// ReactDOM.render(
//   element2,
//   document.querySelector('#root')
// )
// 为什么有时候用getElementID 有时候又用querySelector 这两者又什么区别么 最好用querySelector

// 函数式组件
// function Childcom(){
//   let h = <h2> 定义变量</h2>
//   let weather = "天晴"
//   let isGo = weather === "下雨了么" ? "不出门": "出门"
//   return(
//     <div>
//       <h1>函数式组件</h1>
//       {h}
//       <h4>出门么？</h4>
//       <h4>{isGo}</h4>
//     </div>
//   )
// }
// ReactDOM.render(
//   <Childcom />,
//   document.querySelector('#root')
// )

//eslint-disable-next-line 
// function Childcom(props){
//   // let h = <h2> 定义变量</h2>
//   let weather = "下雨"
//   let isGo = weather === props.weather?  "不出门": "出门"
//   return(
//     <div>
//       {/* <h1>函数式组件</h1>
//       {h} */}
//       <h4>出门么？</h4>
//       <h4>{isGo}</h4>
//     </div>
//   )
// }
// ReactDOM.render(
//   <Childcom weather = "下雨" />,
//   document.querySelector('#root')
// )

// // 类组件
// class Hello extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>shenshi</h1>
//         <h2>hello!</h2>
//         <h3>{this.props.name}</h3>
//         {/* 复合组件 */}
//         <Childcom/>

//         <h2>
//             我是类组件
//         </h2>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <Hello weather = "下雨" name = "shenhsi"/>,
//   document.querySelector('#root')
// )

// 函数式组件 类组件 区别
// 函数式  一般为静态的 没有交互的
// 类组件 用于交互式的
// 复合组件 组件中还有组件 既可以有类组件 也可以有函数组件




// class Clock extends React.Component{
//     constructor(props){
//             super(props)
//             // 状态即数据 决定着 视图
//             // 构造函数中初始化 state 数据   将需要变化的数据用state修改
//             this.state = {
//                 time: new Date().toLocaleTimeString()
//             }
             
//     }

//     render(){
//         // console.log("这是渲染函数")
//         // this.state.time = new Date().toLocaleTimeString();
//         // 
//         return(
//             <div>
//                <span>现在时间是：</span> <span>{this.state.time}</span>
//             </div>
//         )
//     }


//     //  生命周期函数  组件渲染完成时的函数
// componentDidMount(){
//     setInterval(()=>{  
//         console.log(this.state.time)
//         //  在console 中时间是在变化  但是 并没有渲染到页面上   
//         // this.state.time = new Date().toLocaleTimeString(); 这是错误的方式
//         // 不要直接用state重新渲染  而是采用setState进行渲染
//         // 通过 this,setState 修改完数据后 并不会立即修改DOM里面的内容，react会在这个函数内容所有设置状态改变后，统一对比虚拟DOM对象，然后在统一修改，提升性能
//         this.setState({
//             time: new Date().toLocaleTim eString()
//         })
//         console.log(this.state.time)
//     }, 1000  )
    
// }
// }


// ReactDOM.render(
//     <Clock />,
    
//     document.querySelector('#root')
// )
// setInterval(
//     ()=>{
//         ReactDOM.render(
//             <Clock />, 
//             // 会调用渲染函数
//             document.querySelector('#root')
//         )  
        
//     }, 1000
// )


// class Tab extends React.Component{
//     constructor(props){
//         super(props)
        
    //     // 设置状态 数据  用this.state   
    //     this.state = {
    //         c1: 'noActive',
    //         c2: 'noActive'
    //     }  

    //     // 必须对事件进行绑定
    //     this.clickEvent = this.clickEvent.bind(this)
    // }
    // clickEvent(e){
    //     console.log('clickEvent')
    //     console.log(e.target.dataset.index)
    //     let index = e.target.dataset.index;
    //     if(index === '1'){
    //         this.setState({
    //             c1: 'content active',
    //             c2: 'content'
    //         })
//         }else{
//             this.setState({
//                 c1: 'content',
//                 c2: 'content active'
//             })
//         }
//     }
//     render(){
//         return(
//             <div>
//                 {/* 在 render 方法中使用 Function.prototype.bind 会在每次组件渲染时创建一个新的函数 */}
//                 <button  data-index ="1" onClick = {this.clickEvent}>内容一</button>
//                 <button data-index ="2" onClick = {this.clickEvent}>内容2</button>
//                 <div className = {this.state.c1}>
//                     <h2>显示内容1</h2>
//                 </div>
//                 <div className = {this.state.c2}>
//                     <h2>显示内容2</h2>
//                 </div>
//             </div>
//         )
//     }
// }


// ReactDOM.render(
//     <Tab />,
//     document.querySelector('#root')
// )



// props   父传递给子组件数据  单向流动 不能子传递给父
// props 的传值 
// props 可以设置默认值   HomeMessage.defaultProps = {name: "shenshi", msg: "hello"}
// 注意   props可以传递父元素的函数 就可以修改父元素的state  从而达到传递数据给父元素

// 在父元素中使用state去控制子元素props 从而达到父元素数据传递到子元素

// class ParentCom extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             isActive:true
//         }
//         this.changeShow = this.changeShow.bind(this);
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick= {this.changeShow}>控制子元素显示</button>
//                 <ChildCom isActive={this.state.isActive} />

//             </div> 
//         ) 
//     }  
//     changeShow(){
//              this.setState({
//                    isActive: !this.state.isActive
//              })
//     }
// }
// class ChildCom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//                 time: new Date().toLocaleTimeString()
//         }   
//     }
//     render(){
//         let  strClass = null;
//         // 通过props调用父元素的状态（数据）
//         if(this.props.isActive){ 
//             strClass = ' active'
//         } else{
//             strClass = ""
//         }
//         return(
//         <div>
//         <div>
//             <span>相隔一秒显示一次，现在时间是:</span>
//             <span>{this.state.time}</span>
//         </div>
//         <div className = {"content1"+strClass}>
//                 <h1>我是子元素</h1>
                
//         </div>
//         </div>
//         )
 
//     } 
//     // 组件渲染完成时  谁调用就写在谁的里面
//     componentDidMount(){
//         setInterval(()=>{
//             this.setState({time: new Date().toLocaleTimeString()})
//         },1000)
//     }
// }



// ReactDOM.render(
//     <ParentCom/>,
//     document.querySelector('#root')
// )




// 数据传递 子传父
 class PapCom  extends  React.Component{
     constructor(props){
            super(props)
            this.state ={
                ChiData: null
            }
     }
     render(){
         return(
             <div>
                <h1>子元素传递给父元素 的数据： {this.state.ChiData}</h1>
                <ChiCom setChiData = {this.setChiData}/>
             </div>
         )
     }
    //  在父元素中设置一个函数 传入参数为子元素参数
     setChiData = (data)=>{
         this.setState({
             ChiData: data
         })
     }
 }

 class ChiCom extends React.Component{
     constructor(props){
         super(props)
         this.state={
             msg: "hello"
         }
     }

     render(){
         return(
             <div>
                 <button onClick = {this.sendData}>传递hello给父元素 </button>
                 <button onClick = {()=>{this.props.setChiData("直接传入子元素参数")}}>传递子元素给父元素 </button>
             </div>
         )
     }
    //  箭头函数 也是指向当前的this   这与通过bind进行绑定含义是一样的
    // 向父元素提供参数的函数
     sendData=()=>{
            //将子元素传递给父元素，实际上就是调用父元素传递进来的 父元素函数
             console.log(this.props.setChiData(this.state.msg))
             this.props.setChiData(this.state.msg)
     }

 }

 ReactDOM.render(
     <PapCom/>,
     document.querySelector('#root')
 )
