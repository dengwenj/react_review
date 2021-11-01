import React, { Component } from 'react'

export default class App extends Component {
  state = { count: 0 }

  componentDidMount() {
    // 这个比 Promise 执行的早
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count) // 2 ==>0

    this.setState((state) => ({ count: state.count + 1 }))
    this.setState((state) => ({ count: state.count + 1 }))
    console.log(this.state.count) // 3 ==>0

    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      console.log('setTimeout', this.state.count) // 10 ==>6

      this.setState({ count: this.state.count + 1 })
      console.log('setTimeout', this.state.count) // 12 ==>7
    })

    Promise.resolve().then(() => {
      this.setState({ count: this.state.count + 1 })
      console.log('promise', this.state.count) // 6 ==>4

      this.setState({ count: this.state.count + 1 })
      console.log('promise', this.state.count) // 8 ==>5
    })
  }

  render() {
    console.log('render', this.state.count) // 1 ==>0   4 ==>3   5 ==>4   7 ==>5  9 ==>6   11 ==>7
    return <div>app</div>
  }
}
