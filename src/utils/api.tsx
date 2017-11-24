import http from './http'

// 登录
export const loginApi = (params: {userName: string, UserPassWord: string}) => {
  console.log(params, 'params')
  return http('/api/v1/security/login', {type: 'POST', data: params})
}
//
export const fetchAllClientele = (params: {}) => {
  return http('/api/v1/companies/manage', params)
}
// 获取查询公司
export const searchCompanys = (params: {userid: number}) => {
  return http('/api/v1/shareing/company', params)
}

export const fetchAllCompany = () => {
  return http('/api/v1/shareing/company/all2')
}
