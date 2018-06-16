var React = require('react')

var Clock = require('./Clock')

var Countdown = React.createClass({
  render() {
    return (
      <div>
        <Clock totalSeconds={130} />
      </div>
    )
  }
})


module.exports = Countdown
