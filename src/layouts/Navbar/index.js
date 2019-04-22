import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from '@reach/router'

import './index.scss'

@inject('user')
@observer
class Navbar extends React.Component {

  render () {
    return (
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/version">Version</Link>
      </nav>
    )
  }
}

export default Navbar