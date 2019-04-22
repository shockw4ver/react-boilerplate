import React from 'react'
import { inject, observer } from 'mobx-react'

import './index.scss'

@inject('user')
@observer
class Version extends React.Component {

  get version () {
    return document.getElementsByTagName('meta')['app-version'].content
  }

  render () {
    return (
      <h1 className="version">
        App's version is now at: {this.version}
      </h1>
    )
  }
}

export default Version