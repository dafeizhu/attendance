import axios from 'axios'
import qs from 'qs'

// 登录接口函数
export function loginDataPost (values) {
  const url = "http://139.199.192.171:8080/nanitao/admin/login.action";
  const data = {
    adminnum: values.userName,
    password: values.password
  }
  return axios.post(url, qs.stringify(data), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
