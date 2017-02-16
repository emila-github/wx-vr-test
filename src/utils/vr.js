const URI = 'http://vr.17173.com/ty'
const fetch = require('./fetch')

/**
 * 抓取VR特定类型的API
 * http://vr.17173.com/ty/m/store/list
 * @param  {String} type   类型，例如：'m/store/list'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi (type, params) {
  return fetch(URI, type, params)
}
// 获取城市列表和当前城市信息
function getCitysInfo (city) {
  let params = city ? {city: city} : {}
  return fetchApi('/m/city/list', params)
      .then(res => res.data)
}

/**
 * 获取列表类型的数据
 * @param  {String} type   类型，例如：'/m/store/list'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function list (params) {
  console.log('list==', params)
  return fetchApi('/m/store/list', params)
      .then(res => res.data)
}

module.exports = { list, getCitysInfo }
