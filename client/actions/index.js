export const RECEIVE_PATIENTS = 'RECEIVE_PATIENTS'

export const receivePatients = patients => {
  return {
    type: RECEIVE_PATIENTS,
    patients
  }
}