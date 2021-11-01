import React, { Component } from 'react'

export default class CountSon extends Component {
  // 当 props 改变时在调用的钩子
  componentWillReceiveProps(props) {
    console.log('CountSon---componentWillReceiveProps', props)
  }

  componentWillMount() {
    console.log('CountSon---componentWillMount')
  }

  componentDidMount() {
    console.log('CountSon---componentDidMount')
  }

  componentWillUpdate() {
    console.log('CountSon---componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('CountSon---componentDidUpdate')
  }

  render() {
    console.log('CountSon---render')
    const { car } = this.props
    return (
      <div>
        <h2>{car}</h2>
      </div>
    )
  }
}
