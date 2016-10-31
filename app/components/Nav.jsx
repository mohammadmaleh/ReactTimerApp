let React = require('react');
let {Link,IndexLink} = require('react-router')

let Nav = React.createClass({
  render(){
    return(
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">React Timer</li>

              <li><Link to="/">Timer</Link></li>
              <li><Link to='/'>Countdown</Link></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><span>Created By</span></li>
              <li><a href='#'>Mohammad Maleh</a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
})
module.exports = Nav
