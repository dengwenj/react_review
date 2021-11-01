import React from 'react'

export default function App() {
  // 新生命周期 废弃了 3 个（will...），新提出来了 2 个

  /* 
    重要的钩子
      1 render：初始化渲染或更新渲染调用
      2 componentDidMount：开启监听，发送 ajax 请求
      3 componentWillUnmount：做一些收尾工作，如：清除定时器
      4 componentDidUpdate(prevProps, prevState, snapshot) 会在更新后会被立即调用
    
    即将废弃的钩子
      1 componentWillMount
      2 componentWillReceiveProps
      3 componentWillUpdate

    新增两个
      1 getDerivedStateFromProps
      2 getSnapshotBeforeUpdate 
  */
  return <div>app</div>
}
