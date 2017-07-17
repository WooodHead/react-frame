import { combineReducers } from 'redux'
import common from './common'
import topic from './topic'
import user from './user'
export default combineReducers({
  common,
  topic,
  user
})
