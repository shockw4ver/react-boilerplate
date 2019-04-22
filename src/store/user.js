import { observable, action } from 'mobx'
import { shouldCancel } from '@services/user'

class User {
  timer = null

  @observable __name__ = 'user'
  @observable BeijingTime = new Date().toLocaleTimeString()
  @observable ParisTime = ''

  constructor () {
    this.startTimer()
  }

  toString () {
    return this.__name__
  }

  @action
  startTimer () {
    this.timer = setInterval(async () => {
      this.BeijingTime = new Date().toLocaleTimeString()
      // Paris is at utc + 1 which equals to BeijingTime(utc + 8) - 1
      this.ParisTime = new Date(new Date().getTime() - 7 * 3600000).toLocaleTimeString()
    }, 1000)
  }

  @action
  stopTimer () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  @action
  startShouldCancelRequest () {
    shouldCancel()
  }
}

export default User