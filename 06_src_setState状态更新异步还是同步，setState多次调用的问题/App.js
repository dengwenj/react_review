import React, { Component, createRef } from 'react'

export default class App extends Component {
  /* 
    setState() 更新状态是异步还是同步的？
      1 执行 setState()的位置？
          在 React 控制的回调函数中：生命周期钩子 / react 事件监听回调
          非 React 控制的异步回调函数中：定时器回调 / 原生事件监听回调 / promise 回调
      2 异步还是同步？
          react 相关回调中：异步
          其他异步回调中：同步
   
    关于异步的 setState()
      1 多次调用，如何处理？
        setState({}):合并更新一次状态，只调用一次 render() 更新界面 ---状态更新和界面更新都合并了
        setState(fn):更新多次状态，但只调用一次 render() 更新界面 ---状态更新没有合并，但界面更新合并了
      2 如何得到异步更新后的状态数据？
          在 setState()的 callback 回调函数中
  */
  state = { count: 0 }

  myRef = createRef()

  // react 的事件中 setState 更新状态是异步的
  update1 = () => {
    console.log('update1 之前', this.state.count)
    this.setState((state, props) => {
      return { count: state.count + 1 }
    })
    console.log('update1 之后', this.state.count)
  }

  // react 中生命周期钩子 setState 更新状态是异步的
  componentDidMount() {
    console.log('componentDidMount之前', this.state.count)
    this.setState((state) => {
      return { count: state.count + 1 }
    })
    console.log('componentDidMount之后', this.state.count)
  }

  // 定时器回调 setState 更新状态是同步的
  update2 = () => {
    setTimeout(() => {
      console.log('setTimeout之前', this.state.count)
      this.setState((state) => ({ count: state.count + 1 }))
      console.log('setTimeout之后', this.state.count)
    })
  }

  // 原生事件 setState 更新状态是同步的
  update3 = () => {
    this.myRef.current.onclick = () => {
      console.log('原生事件回调之前', this.state.count)
      this.setState((state) => ({ count: state.count + 1 }))
      console.log('原生事件回调之后', this.state.count)
    }
  }

  // promise回调 setState 更新状态是同步的
  update4 = () => {
    Promise.resolve().then(() => {
      console.log('promise回调之前', this.state.count)
      this.setState((state) => ({ count: state.count + 1 }))
      console.log('promise回调之后', this.state.count)
    })
  }

  // 多次调用，如何处理？
  // 对象 2 合并
  update5 = () => {
    console.log('update5之前', this.state.count)
    this.setState({ count: this.state.count + 2 })
    console.log('update5之后', this.state.count)
    console.log('update5之前2', this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log('update5之后2', this.state.count)
  }

  // 函数 4 不合并
  update6 = () => {
    console.log('update6之前', this.state.count)
    this.setState((state) => ({ count: state.count + 2 }))
    console.log('update6之后', this.state.count)
    console.log('update6之前2', this.state.count)
    this.setState((state) => ({ count: state.count + 1 }))
    console.log('update6之后2', this.state.count)
  }

  // 前面对象，后面函数 4 不合并
  update7 = () => {
    console.log('update7之前', this.state.count)
    this.setState({ count: this.state.count + 2 })
    console.log('update7之后', this.state.count)
    console.log('update7之前2', this.state.count)
    this.setState((state) => ({ count: state.count + 1 }))
    console.log('update7之后2', this.state.count)
  }

  // 前面函数，后面对象 2 合并
  update8 = () => {
    console.log('update8之前', this.state.count)
    this.setState((state) => ({ count: state.count + 2 }))
    console.log('update8之后', this.state.count)
    console.log('update8之前2', this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log('update8之后2', this.state.count)
  }

  render() {
    console.log('render', this.state.count)
    return (
      <div>
        <h2 ref={this.myRef}>当前数字为：{this.state.count}</h2>
        <button onClick={this.update1}>update1</button>
        <button onClick={this.update2}>update2</button>
        <button onClick={this.update3}>update3</button>
        <button onClick={this.update4}>update4</button>
        <button onClick={this.update5}>update5</button>
        <button onClick={this.update6}>update6</button>
        <button onClick={this.update7}>update7</button>
        <button onClick={this.update8}>update8</button>
      </div>
    )
  }
}
