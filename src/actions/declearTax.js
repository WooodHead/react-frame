import { createAction } from 'redux-actions'
import { fetchDeclareList } from '@/utils/api'

export const fetchDeclareListAction = (params) => (dispatch) => {
  fetchDeclareList(params).then(res => {
    if (res.status) {
      dispatch(createAction('update declear tax list')(res.data))
    }
  })
}
