import React, { Component } from 'react';
import { Provider } from 'mobx-react'

// 为了在不同的浏览器环境中有尽量统一的展示，使用 normalize.css 进行样式重置
import 'normalize.css'
// 重置标签样式，懂的都懂
import 'reset.css'

// store
import * as store from '@store'

// router
import Routes from './Router'

import Navbar from '@layouts/Navbar'

import request from '@services/request'

request('/api/ok')

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <div>
          <Navbar />
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
