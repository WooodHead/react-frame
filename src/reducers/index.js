import { combineReducers } from 'redux'
import common from './common'
import current from './current'
import demo1 from './demo1'
export default combineReducers({
  common,
  current,
  demo1
})
