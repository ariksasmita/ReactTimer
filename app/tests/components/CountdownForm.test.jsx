var expect = require('expect')
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var CountdownForm = require('../../components/CountdownForm')

describe('CountdownForm', () => {
  it('should exists', () => {
    expect(CountdownForm).toExist()
  })

  it('should call onSetCountdown if valid seconds passed', () => {
    var spy = expect.createSpy()
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm))

    // define a valid value to refs (passed on submit)
    countdownForm.refs.seconds.value = '109'
    // simulate submit action
    TestUtils.Simulate.submit($el.find('form')[0])
    // assert if passed spy get called with expected prop
    expect(spy).toHaveBeenCalledWith(109)
  })

  it('should not call onSetCountdown if invalid seconds passed', () => {
    var spy = expect.createSpy()
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm))

    // define a valid value to refs (passed on submit)
    countdownForm.refs.seconds.value = 'testing'
    // simulate submit action
    TestUtils.Simulate.submit($el.find('form')[0])
    // assert if passed spy get called with expected prop
    expect(spy).toNotHaveBeenCalled()
  })
})
