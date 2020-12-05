import { RECEIVE_PATIENTDETAILS } from '../actions'

export default function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_PATIENTDETAILS:
      return action.patient
    default:
      return state
  }
}
