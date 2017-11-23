import http from './http'
//
export const fetchAllClientele = (params: {}) => {
  return http('/api/v1/companies/manage', params)
}
// 获取查询公司
interface SearchCompanys {
  userid: number
}
export const searchCompanys = (params: SearchCompanys) => {
  return http('/api/v1/shareing/company', params)
}

export const fetchAllCompany = () => {
  return http('/api/v1/shareing/company/all2')
}
