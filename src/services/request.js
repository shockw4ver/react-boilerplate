import request, { extend } from 'umi-request'

const isProd = process.env.NODE_ENV === 'production'

const codeMap = {
  /* define error code here */
}

const errorHandler = error => {
  const { response, data } = error
  
  /* code for error handling */
}

/* 
  define common options for requests,
  more info at https://github.com/umijs/umi-request#extend-options-initialize-default-parameters-support-all-of-the-above
*/
const extendedRequest = extend({
  prefix: isProd ? 'https://your.release.domain/[API_PATH]' : 'http://your.dev.domain/[API_PATH]',
  errorHandler,
  params: {
    channel: '' // example: ciba_app, wx, mobile_browser
  }
})

/**
* If service's errors base on response status, use this boilerplate and delete the below one.
*/
request.interceptors.response.use(response => {
  const msg = codeMap[response.status]
  // todo with msg

  return response
})

/**
 * If service adopt 200 errors, use this one and delete above.
 */
request.interceptors.response.use(async response => {
  const data = await response.clone().json();
  const msg = codeMap(data.status)
  // todo with msg
  
  return response;
})

/**
 * Define an interceptor for request
 */
request.interceptors.request.use((url, options) => {
  if (/should_cancel/.test(url)) {
    throw 'This request has been canceled.'
  }

  return { url, options }
})

export default extendedRequest

/**
 * r_request relate the raw request function of umi-request,
 * if some apis don't need rules above, use this
 */
export const r_request = request