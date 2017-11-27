import http from './http'

// 登录
export const loginApi = (params: {userName: string, UserPassWord: string}) => {
  return http('/api/v1/security/login')
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

export const fetchAllRejected = () => {
  return http('/api/v1/ReceiptOperation/rejectimage?order=asc&limit=10&offset=0')
}
