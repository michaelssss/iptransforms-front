export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVED_POST = 'RECEIVED_POST'

export const request_post = function(nowState){
    return {
        type:REQUEST_POST,
        nowState
    }
}
export const received_post = function(nowState,json){
    return {
        type:RECEIVED_POST,
        nowState,
        json
    }
}

export function fetchPosts(nowState) {

    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
  
    return function (dispatch) {
  
      // 首次 dispatch：更新应用的 state 来通知
      // API 请求发起了。
  
      dispatch(request_post(nowState))
  
      // thunk middleware 调用的函数可以有返回值，
      // 它会被当作 dispatch 方法的返回值传递。
  
      // 这个案例中，我们返回一个等待处理的 promise。
      // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
  
      return fetch(`http://127.0.0.1:8080/IPAddr/transform`,{
          body:{
              addr:'172.168.1.5'
          }
      })
        .then(
          response => response.json(),
          // 不要使用 catch，因为会捕获
          // 在 dispatch 和渲染中出现的任何错误，
          // 导致 'Unexpected batch number' 错误。
          // https://github.com/facebook/react/issues/6895
           error => console.log('An error occurred.', error)
        )
        .then(json =>
          // 可以多次 dispatch！
          // 这里，使用 API 请求结果来更新应用的 state。
  
          dispatch(received_post(nowState, json))
        )
    }
}