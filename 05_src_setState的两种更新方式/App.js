import React, { Component } from 'react'

export default class App extends Component {
  /* 
    setState更新状态的 2 种方法
      1 对象式 setState({},callback)
             callback 是可选的回调函数，它在状态更新完毕，界面也更新后（render 调用后）才被调用
      2 函数式 setState((state,props)=>{},callback)


     更新状态的方法是异步
       
  */

  state = { count: 0 }

  handleClick = () => {
    // 对象方式
    //     this.setState({ count: this.state.count + 1 }, () => {
    //       console.log(this.state.count) // 在这里面就可以拿到最新的 count ，在 状态更新后，render调用后，执行
    //     })
    //     console.log(this.state.count) // 更新状态的方法是异步的

    // 函数方式
    this.setState(
      (state, props) => {
        console.log(state, props)
        return { count: state.count + 1 }
      },
      () => {
        console.log(this.state.count)
      }
    )
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h2>{count}</h2>
        <button onClick={this.handleClick}>点击+1</button>
      </div>
    )
  }
}
