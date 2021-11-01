import React, { Component } from 'react'

export default class Life extends Component {
  state = { opacity: 1 }

  // 组件挂载完毕
  componentDidMount() {
    this.timer = setInterval(() => {
      let { opacity } = this.state
      opacity -= 0.1
      if (opacity <= 0) opacity = 1
      this.setState({ opacity })
    }, 200)
  }

  // 组件将要卸载
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  // 初始化渲染、状态更新后
  render() {
    const { opacity } = this.state
    return (
      <div>
        <h2 style={{ opacity }}>react复习</h2>
      </div>
    )
  }
}
