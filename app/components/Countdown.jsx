let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');
let Countdown = React.createClass({
  getInitialState:function(){
    return{count:0,countdownStatus:'stoped'}
  },
  handleSetCountdown:function(seconds){
    this.setState({
      count:seconds,
      countdownStatus:'started'
    })
  },
  componentDidUpdate:function(prevProps,prevStats){
    if ( this.state.countdownStatus != prevStats.countdownStatus){
      switch (this.state.countdownStatus ) {
        case 'started':
          this.startTimer();
          break;


      }
    }
  },
  startTimer:function(){
    var that = this;
    this.timer = setInterval(function(){
    
      var newCount =  that.state.count -1
      that.setState({
        count: newCount >=0 ? newCount : 0
      })
    },1000)
  },
  render:function(){
    var {count} = this.state
    return(
      <div>
        <Clock totalSeconds={count}></Clock>
        <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
      </div>

    )

  }
})

module.exports = Countdown
