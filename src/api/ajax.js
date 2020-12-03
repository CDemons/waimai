/*
*   ajax 请求函数模块
* 返回值：promise 对象  异步返回的数据是：response.data 数据，而不是response
* */
import axios from 'axios'
//向外 默认暴露一个函数
export default function ajax(url,data={},type='GET') {

  return new Promise(function (resolve,reject) {
        //执行异步 ajax  请求
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      //如果是get 请求 就将data里面的数据添加到  url 里面
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      //成功了调用 resolve()
          resolve(response.data)
    }).catch(function (error) {
      //失败了调用 reject()
          reject(error)
      })
  })
}
