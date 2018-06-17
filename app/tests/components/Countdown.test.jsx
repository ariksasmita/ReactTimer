var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var Countdown = require('../../components/Countdown')

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist()
  })

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown/>)
      countDown.handleSetCountdown(10);

      expect(countDown.state.count).toBe(10)
      expect(countDown.state.countdownStatus).toBe('started')

      // check if count updated after a second.
      // `done` here let mocha knows that we want to do this test async-ly
      // It passed above in `it` and used here
      setTimeout(() => {
        expect(countDown.state.count).toBe(9)
        done()
      }, 1001)
    })

    it('should never set count less than zero', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown/>)
      countDown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countDown.state.count).toBe(0)
        done()
      }, 3000)
    })

  })
})
