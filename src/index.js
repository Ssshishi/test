import React, {useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './index.css';

import FirstCom from './component/FirstCom.js';
import SecondCom from './component/SecondCom.js';
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




// // 数据传递 子传父
//  class PapCom  extends  React.Component{
//      constructor(props){
//             super(props)
//             this.state ={
//                 ChiData: null
//             }
//      }
//      render(){
//          return(
//              <div>
//                 <h1>子元素传递给父元素 的数据： {this.state.ChiData}</h1>
//                 <ChiCom setChiData = {this.setChiData}/>
//              </div>
//          )
//      }
//     //  在父元素中设置一个函数 传入参数为子元素参数
//      setChiData = (data)=>{
//          this.setState({
//              ChiData: data
//          })
//      }
//  }

//  class ChiCom extends React.Component{
//      constructor(props){
//          super(props)
//          this.state={
//              msg: "hello"
//          }
//      }

//      render(){
//          return(
//              <div>
//                  <button onClick = {this.sendData}>传递hello给父元素 </button>
//                  <button onClick = {()=>{this.props.setChiData("直接传入子元素参数")}}>传递子元素给父元素 </button>
//              </div>
//          )
//      }
//     //  箭头函数 也是指向当前的this   这与通过bind进行绑定含义是一样的
//     // 向父元素提供参数的函数
//      sendData=()=>{
//             //将子元素传递给父元素，实际上就是调用父元素传递进来的 父元素函数
//              console.log(this.props.setChiData(this.state.msg))
//              this.props.setChiData(this.state.msg)
//      }

//  }

//  ReactDOM.render(
//      <PapCom/>,
//      document.querySelector('#root')
//  )



// 事件 onClick  绑定事件写驼峰命名   {} 传入一个函数  不是字符串
// 事件对象react返回的事件对象是代理的原生事件对象 如果想要查看事件具体值 必须输出事件对象的属性 
// // 原生 阻止默认行为时，可以直接返回return false
// class  DadCom extends React.Component{
//     constructor(props) {
//         super(props);
        
//     }
//     render(){
//         return(
//             <div> 
//                 <div className="children">
//                     <form action="https://www.baidu.com/">
//                         <h1>hello</h1>
//                         <button onClick={this.dadEvent}>提交</button>
//                     </form>
//                     {/* 函数调用必须要以匿名的方式进行调用 */}
//                     {/* 使用箭头函数调用多个参数 */}
//                     <button onClick={(e)=>{this.dadEvent1('msg:hello',e)}}>提交</button> 
//                     {/* 使用普通函数调用多个参数  必须加bind(this)*/}
//                     <button onClick={function(e){this.dadEvent1('shenshi',e)}.bind(this)}> 提交 </button> 
//                 </div>
//             </div>
//         )
//         }
//     // react 事件传参   
//     dadEvent=(e)=>{
//         console.log(e);
//         // 阻止默认事件 form中默认事件就是跳转到百度中   在react中  必须使用e.preventDefault()
//         e.preventDefault();
//         // return false;
//     }
//     dadEvent1=(msg,e)=>{
//         console.log(msg);
//         console.log(e);
//     }
// }

// ReactDOM.render(
//     <DadCom />,
//     document.querySelector('#root')
// )


// react 渲染   条件渲染  即js里面的条件运算 三元运算
// function UserGreet (props) {
//     return (
//         <h1>
//             欢迎登陆
//         </h1>
//     )
// }

// function UserLogin (props) {
//     return (
//         <h1>请先登陆</h1>
//     )
// }

// class Pa extends React.Component {
//     constructor (props) {
//         super (props)
//         this.state = {
//             isLogin: true
//         }
//     }
//     // 直接通过条件运算返回渲染的JSX对象 
//     // 通过条件运算得 出jsx对象 再将jsx对象渲染到模板中
//     render () {
//         let element = null ;
//         if (this.state.isLogin) { 
//             element =  <UserGreet></UserGreet> ;
//             //   另一种方式  return ( <UserLogin> </UserLogin> )
//             }else{
//                 element = <UserLogin></UserLogin> ;
//             }

//         return (
//             <div>
//                 <h1>头部</h1>
//                 {element}
//                 <h1>这是三元运算符的操作</h1>
//                 { this.state.isLogin ? <UserGreet></UserGreet> : <UserLogin></UserLogin> }
//                 <h1>尾部</h1>
//             </div>
//         )
//     }
// }

// // 提高代码质量 以空格隔开

// ReactDOM.render (
//     <Pa></Pa>,
//     document.querySelector ('#root')
// )


//  列表渲染   将列表内容拼装成数组 放到 模板中      将数据拼装封装成  数组的jsx 对象

// let arr = [ "小明", "小王", "小赵", "小诗"]
// let arrHtml =[ <li>小明</li>, <li>小王</li>, <li>小赵</li>, <li>小诗</li> ]
// class Welcome extends React.Component {
//     constructor (props) {
//         super (props)
//     }
//     render () {
//         return (
//             <div>
//                 <ul>
//                     { arrHtml }
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render (
//     <Welcome/>,
//     document.querySelector ('#root')
// )

// class  Welcome extends React.Component {
//     constructor (props) {
//         super (props)
//         this.state = {
//             list: [
//                 {
//                     title: " 第一节 ",
//                     content:  " 事件内容 "
//                 },
//                 {
//                     title: " 第二节 ",
//                     content:  " 数据传递内容 "
//                 },
//                 {
//                     title: " 第三节 ",
//                     content:  " 条件渲染内容 "
//                 }
//             ]
//         }
//     }
//     render () {
        // 第一种方式
        // let listArr = []
        // for (let i=0; i < this.state.list.length; i++){
        //     let item = (
        //         <li>
        //             <h3>{this.state.list[i].title} </h3>
        //             <p> {this.state.list[i].content} </p>
        //         </li>  
        //     )
        //     listArr.push(item)
        // }

        // 第二种方式
        // 使用数组的map方法 ，将每一项数据按照jsx的形式进行加工，最终得到1个每一项都是jsx对象的数组，家在将数组渲染到模板中。
        // key 值需要放置到每一项中。
//         let listArr = this.state.list.map ((item, index)=>{
//             return(
//                 <li key = {index}>
//                     <h3>{index + 1}: {item.title} </h3>
//                     <p>{index + 1}: {item.content} </p>
//                 </li>
//             )
//         })
//         console.log(listArr)
//         return (
//             <div>
//                 <h1>
//                     今天
//                 </h1>

//                 <ul>
//                     {listArr}
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDOM.render (
//     <Welcome/>,
//     document.querySelector(' #root ')
// )


// key 标识
// function ListItem (props) {
//     return (
//         <li>
//             {props.value}
//         </li>
//     );
// }

// function NumberList (props) {
//     // NumberList有两个参数  numbers listItems
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => <ListItem key = {number.toString()} value = {number} />);

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//     <NumberList numbers = {numbers} />,
//     document.querySelector('#root')
// )

// key 在兄弟节点之间必须唯一
// function Blog (props) {
//     const sideBar = (
//         <ul>
//             {props.posts.map ((post) =>
//                 <li key = {post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map ((post) =>
//         <div key = {post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//             {sideBar}
//             <hr/>
//             {content}
//         </div>
//     );
// }

// const posts = [
//     {id: 1, title: 'hello', content: '欢迎你'},
//     {id: 2, title: 'hi', content: '谢谢你'}
// ]

// ReactDOM.render(
//     <Blog posts = {posts}/>,
//     document.querySelector('#root')
// )


// 表单
// class NameForm extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             value : ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange (event) {
//         this.setState ({
//             value: event.target.value
//         });
//     }
//     handleSubmit (event) {
//         console.log( '提交的名字：' + this.state.value);
//         event.preventDefault();
//     }

//     render () {
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     名字：
//                     <input type = "text" value = {this.state.value} onChange = {this.handleChange} />
//                 </label>
//                 <input type = "submit" value = "提交" />
//             </form>
//         )
//     }
// }

// ReactDOM.render (
//     <NameForm />,
//     document.querySelector ('#root')
// )


// //下拉列表
// class FlavorForm extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             value: 'coconut'
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange (event) {
//         this.setState({
//             value: event.target.value
//         })
//     }
//     handleSubmit (event) {
//         console.log(event);
//         console.log ('你喜欢吃' + this.state.value);
//         event.preventDefault();
//     }

//     render () {
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     选择你喜欢吃的：
//                     <select value = {this.state.value} onChange = {this.handleChange}>
//                         <option value = "grape">葡萄</option>
//                         <option value = "peanuts">桃子</option>
//                         <option value = "banana">香蕉</option>
//                         <option value = "coconut">椰子</option>
//                         <option value = "mango">芒果</option>
//                     </select>
//                 </label>
//                 <input type = "submit" value = "提交" />
//             </form>
//         )
//     }
// }

// ReactDOM.render (
//     <FlavorForm />,
//     document.querySelector('#root')
// )

 
// 状态提升  多个组件需要反映相同的变化数据，这时可以将共享状态提升到最近的共同父组件中去
// 实现温度换算
// 是否会煮沸 函数组件 
// function BoilingVerdict (props) {
//     if (props.celsius >= 100) {
//         return <p> the water would boil</p>
//     } else {
//         return <p> the water would not boil</p>
//     }
// }
// // 温度输入 组件  
// class TemperatureInput extends React.Component {
//     constructor (props) {
//         super(props);
//         this.handleChange = this.handleChange.bind (this);
//     }
//     // 通过props 调用父组件的函数
//     handleChange (e) {
//         this.props.onTemperatureChange (e.target.value)
//     }

//     render (){
//         // 来自父组件 props 这两个量
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>
//                     Enter temperature in {scalesName[scale]}
//                 </legend>
//                 <input value = {temperature} onChange = {this.handleChange} />
//             </fieldset>
//         )
//     }
// }
// // 定义华氏温度和标准温度名称
// const scalesName = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// }

// // 换算华氏温度与标准温度之间 换算
// function toCelsius (fahrenheit) {
//     return (fahrenheit - 32) * 5 /9
// }
// function toFahrenheit(celsius) {
//     return (celsius * 9 /5) + 32
// }

// 将输入温度值 从 数值型变成 字符串型
// function tryConvert (temperature, convert){
//     const input = parseFloat(temperature);
//     // 输入为空时
//     if(Number.isNaN(input)) {
//         return '';
//     }

//     const output = convert(input);
//     // 四舍五入 函数
//     const rounded = Math.round(output * 1000) / 1000; 
//     return rounded.toString();
// }

// // 共同的父组件 所有需要变化的量均共享在这个共同父组件中
// class Calculator extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             temperature: '',
//             scale: 'c'
//         };
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     }
//     handleCelsiusChange (temperature) {
//         this.setState ({
//             scale: 'c',
//             temperature
//         })
//     }
//     handleFahrenheitChange (temperature) {
//         this.setState ({
//             scale: 'f',
//             temperature
//         })
//     }
//     render () {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert (temperature,toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;

//         return (
//            <div>
//                <TemperatureInput scale = 'c' temperature = {celsius} onTemperatureChange = {this.handleCelsiusChange} />
//                <TemperatureInput scale = 'f' temperature = {fahrenheit} onTemperatureChange = {this.handleFahrenheitChange} />
//                <BoilingVerdict celsius = {parseFloat(celsius)} />

//            </div>
//         )
//     }
// }


// ReactDOM.render(
//     <Calculator />,
//     document.querySelector('#root')
// )

// 使用hook 目的： 通过自定义hook可以实现组件间的公用状态操作
//  useState useEffect  创建stack hook 和 effect hook

// 状态钩 
// function Example () {
//     // 给函数内部加一些 state   useState(参数是 初始state  只有一个参数)
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p> you clicked {count} times </p>
//             <button onClick = {() => setCount (count + 1)}>
//                 click me
//             </button>
//         </div>
//     )
// }
 
// ReactDOM.render(
//     <Example />,
//     document.querySelector ('#root')
// )

// 效果钩 useEffect
// 副作用 也就是  执行过数据获取 订阅 手动修改过DOM  useEffect就是可以给函数组件增加操作副作用的能力 

// function Example1 () {
//     const [count, setCount] = useState(0);

//     // useEffect(() => {
//     //     effect
//     //     return () => {
//     //         cleanup
//     //     }
//     // }, [input])
    
//     useEffect(() => {
//         // 模板字符串 的写法
//         // 更改网站标题
//         document.title = `You click ${count} times`;
//     });

//     return (
//         <div>
//             <p>you click {count} times</p>
//             <button onClick = {() => setCount (count + 1)} >
//                 click me
//             </button>
//         </div>
//     )
// }

// ReactDOM.render (
//     <Example1 />,
//     document.querySelector('#root')
// )

// useEffect  还可以返回一个函数来指定如何 清除副作用 
// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange (status) {
//         setIsOnline (status.isOnline);
//     }

//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//         }
//     })

//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }

// 路由的使用
// 首先安装react-router-dom
// BrowserRouter as Router表示使用Router就是使用BrowserRouter 
// <Route exact path="/" component={Landing} />exact表示指定path只有在访问'/'的时候才展示component={Landing}里面的组件,这个属性可选择性使用
//  ReactRouter 三大组件  
//      Router:  所有路由组件的 根组件 也就是 底层组件  包裹路由规则的最外层容器
//      Route:   路由规则匹配组件 显示当前规则对应的组件
//      Link:    路由跳转的组件

let firstCom = (<div>
    <FirstCom />
    <SecondCom />
</div>);

ReactDOM.render(
    firstCom,
    document.querySelector('#root')
)

