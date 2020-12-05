import { RECEIVE_PATIENTS } from '../actions'

export default function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_PATIENTS:
      return action.patients
    default:
      return state
  }
}
