import React from 'react'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('user')
@observer
class Home extends React.Component {

  handleClick = ev => {
    this.props.user.startShouldCancelRequest()
  }

  render () {
    return (
      <h1 className="home">
        Beijing is now at: {this.props.user.BeijingTime}
        <br/>
        Paris is Now at: {this.props.user.ParisTime}
        <br/>
        <button onClick={this.handleClick}>click me</button>
      </h1>
    )
  }
}

export default Home