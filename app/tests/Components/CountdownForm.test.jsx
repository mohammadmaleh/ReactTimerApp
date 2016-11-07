var React = require('react');
var ReactDOM = require('react-dom');
let expect = require('expect');
var $ = require('JQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm',function(){
  it('should exist',function(){
    expect(CountdownForm).toExist();
  })
  it ('should call on set countdown if valid seconds entered',function(){
    var spy = expect.createSpy();
    var countdownForm =  TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}></CountdownForm>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109)
  })
  it ('should NOT call on set countdown if invalid seconds entered',function(){
    var spy = expect.createSpy();
    var countdownForm =  TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}></CountdownForm>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = 'asd';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled('adf')
  })
})
