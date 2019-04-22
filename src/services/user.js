import request from './request'

export function shouldCancel () {
  return request('/should_cancel')
}