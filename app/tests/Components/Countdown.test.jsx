var React = require('react');
var ReactDOM = require('react-dom');
let expect = require('expect');
var $ = require('JQuery');
var TestUtils = require('react-addons-test-utils');
var Countdown= require('Countdown');

describe('countdown',()=>{
  it('should exist',()=>{
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown',()=> {
      it('shoudl set state to started and counddown',(done)=>{ // we included done because mocha needs it to async test
        var countdown =  TestUtils.renderIntoDocument(<Countdown ></Countdown>);
        var $el = $(ReactDOM.findDOMNode(countdown));
        countdown.handleSetCountdown(10)
        expect(countdown.state.count).toEqual(10);
        expect(countdown.state.countdownStatus).toEqual('started');
        setTimeout(()=>{
          expect(countdown.state.count).toEqual(9);
          done();
        },1001) // to check if the timer changed to 9 after 1 second

      })
      it('shoudl set state to zero if count is less than zero',(done)=>{ // we included done because mocha needs it to async test
        var countdown =  TestUtils.renderIntoDocument(<Countdown ></Countdown>);
        var $el = $(ReactDOM.findDOMNode(countdown));
        countdown.handleSetCountdown(1)
        expect(countdown.state.count).toEqual(1);
        expect(countdown.state.countdownStatus).toEqual('started');
        setTimeout(()=>{
          expect(countdown.state.count).toEqual(0);
          done();
        },3001) // to check if the timer changed to 9 after 1 second

      })
  });
});
