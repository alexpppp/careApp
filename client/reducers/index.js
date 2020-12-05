import {combineReducers} from 'redux'

import auth from './auth'
import patients from './patients'
import patientDetails from './patientDetails'

export default combineReducers({
  auth,
  patients,
  patientDetails
})
