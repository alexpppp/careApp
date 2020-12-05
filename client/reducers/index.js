import {combineReducers} from 'redux'

import auth from './auth'
import patients from './patients'

export default combineReducers({
  auth,
  patients
})
