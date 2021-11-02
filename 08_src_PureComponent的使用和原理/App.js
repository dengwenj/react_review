import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  /* 
    1 Component 存在的问题？
        1 父组件重新 render(),当前组件也会重新执行 render(), 即使没有任何变化  props
        2 当前组件 setState()，重新执行 render(),即使 state 没有任何变化     state

    2 解决 Component 存在的问题
        1 原因：组件的 shouldComponentUpdate() 默认返回 true，即使数据没有变化 render() 都会重新执行
        2 办法1：重写 shouldComponentUpdate()，判断如果数据有变化返回 true，否则返回 false
        3 办法2：使用 PureComponent 代替 Component
        4 说明：一般都使用 PurComponent来优化组件性能 

    3 PureComponent 的基本原理
        1 重写实现 shouldComponentUpdate()
        2 对组件的新/旧 state 和 props 中的数据进行浅比较，如果都没有变化，返回 false，否则返回 true
        3 一旦 shouldComponentUpdate() 返回 false 不再执行用于更新的 render()

    4 面试题
        组件的哪个生命周期钩子能实现组件优化？
        PureComponent的原理？
        区别 component 与 PureComponent
  */

  state = { count: 1 }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return true
  }

  count = () => {
    this.setState((state) => ({ count: state.count + 1 }))
  }

  render() {
    console.log('render')
    return (
      <div>
        <h2>当前数字为：{this.state.count}</h2>
        <button onClick={this.count}>点击</button>
      </div>
    )
  }
}
