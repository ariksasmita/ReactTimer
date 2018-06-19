var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var Timer = require('../../components/Timer')

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  describe('handleSetCountdown', () => {
    it('should set state to started and start count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />)
      timer.handleStatusChange('started')
      expect(timer.state.count).toBe(0)

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('started')
        expect(timer.state.count).toBe(1)
        done()
      }, 1001)
    })

    it('should set state to stopped and stop count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />)
      timer.setState({ count: 10 })
      timer.handleStatusChange('started')
      timer.handleStatusChange('stopped')

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('stopped')
        expect(timer.state.count).toBe(0)
        done()
      }, 1001)
    })

    it('should set state to paused and pause count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />)
      timer.setState({ count: 10 })
      timer.handleStatusChange('started')
      timer.handleStatusChange('paused')

      setTimeout(() => {
        expect(timer.state.count).toBe(10)
        expect(timer.state.timerStatus).toBe('paused')
        done()
      }, 1001)
    })

  })
})
