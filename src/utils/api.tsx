import http from './http'

// 登录
export const loginApi = (params: {userName: string, UserPassWord: string}) => {
  return http('/api/v1/security/login', {type: 'POST', data: params})
}
// 退出
export const loginOutApi = () => {
  return http('/api/v1/security/logout', {type: 'DELETE'})
}
// 获取当前角色信息
export const fetchCurrentInfo = () => {
  return http('/api/v1/security/current')
}
// 获取我的小组
export const fetchRangInfo = () => {
  return http('/api/v1/security/range')
}
// 获取消息数
export const fetchMessageNum = () => {
  return http('/api/v1/messages/unreads/count')
}

/* 申报列表页面相关接口 */
// 获取申报列表会计列表
export const fetchAccountants = () => {
  return http('/api/v1/Accountants/')
}
// 获取申报列表
export const fetchDeclareList = (params: any) => {
  return http('/api/v1/declaration/autolist', params)
}

// 修改密码
export const changePasswd = (params: {OldPassword: string, NewPassword: string, NewPassword2: string}) => {
  return http('/api/v1/security/password/change', 'PUT', params)
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
// 查询驳回信息
export const fetchAllRejected = () => {
  return http('/api/v1/ReceiptOperation/rejectimage?order=asc&limit=10&offset=0')
}
export const fetchRejectedCommunicate = (params: {receiptId: number, tars: number}) => {
  return http('/api/v1/ReceiptOperation/RejectedCommunicate', params)
}
