import React, { Component } from 'react'

import CountSon from '../CountSon'

export default class Count extends Component {
  constructor(props) {
    console.log('Count---constructor')
    super(props)
    this.state = { count: 0, car: '奔驰' }
  }

  add = () => {
    this.setState((state) => {
      return { count: state.count + 1 }
    })
  }

  force = () => {
    this.forceUpdate()
  }

  car = () => {
    this.setState({ car: '奥迪' })
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    console.log('Count---componentWillMount')
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count---componentDidMount')
  }

  // 控制组件更新的阀门
  shouldComponentUpdate() {
    console.log('Count---shouldComponentUpdate')
    // 要返回 布尔值，返回 true 就继续往下执行，返回 false 就不往下执行了
    return true
  }

  // 组件即将要更新的时候钩子
  componentWillUpdate() {
    console.log('Count---componentWillUpdate')
  }

  // 组件更新完过后的钩子
  componentDidUpdate() {
    console.log('Count---componentDidUpdate')
  }

  render() {
    console.log('Count---render')
    const { count, car } = this.state
    return (
      <div>
        当前求和为：{count} <br />
        <button onClick={this.add}>点击加1</button>
        <button onClick={this.force}>强制更新</button>
        <hr />
        <button onClick={this.car}>换车</button>
        <CountSon car={car}></CountSon>
      </div>
    )
  }
}
