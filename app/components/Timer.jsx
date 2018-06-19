var React = require('react')

var Clock = require('./Clock')
var Controls = require('./Controls')

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped',
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart()
          break;
        case 'stopped':
          this.setState({ count: 0 })
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined
          break;
      }
    }
  },
  componentWillUmount: function() {
    clearInterval(this.timer)
    this.timer = undefined
  },
  handleStart: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1
      this.setState({
        count: newCount,
      })
    }, 1000)
  },
  stopTimer: function() {
    this.setState({
      countdownStatus: 'stopped',
    })
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus,
    })
  },
  render() {
    var { count, timerStatus } = this.state
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={ count } />
        <Controls status={ timerStatus } onStatusChange={ this.handleStatusChange } />
      </div>
    )
  }
})

module.exports = Timer
