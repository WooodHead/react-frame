import { combineReducers } from 'redux'
import common from './common'
import current from './current'
import declearTax from './declearTax'
import demo1 from './demo1'
export default combineReducers({
  common,
  current,
  declearTax,
  demo1
})
