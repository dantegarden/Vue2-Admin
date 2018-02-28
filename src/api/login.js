import request from '@/utils/request'

export function loginByUsername(username, password) {
  var grant_type = 'password'
  var scope = 'server'
  var randomStr = new Date().getTime()
  var code = ''
  const data = {
    username,
    password,
    randomStr,
    code,
    grant_type,
    scope
  }
  return request({
    url: '/auth/oauth/token',
    headers: {
      'Authorization': 'Basic Y29tLmdpdGh1Yi5saXV3ZWlqdzpjb20uZ2l0aHViLmxpdXdlaWp3Ljg4ODg4OA=='
    },
    method: 'post',
    params: data
  })
}

export function logout(accesstoken, refreshToken) {
  return request({
    url: '/auth/removeToken',
    method: 'post',
    params: { accesstoken, refreshToken }
  })
}

export function getUserInfo() {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

