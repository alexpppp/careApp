export const RECEIVE_PATIENTS = 'RECEIVE_PATIENTS'
export const RECEIVE_PATIENTDETAILS = 'RECEIVE_PATIENT'

export const receivePatients = patients => {
  return {
    type: RECEIVE_PATIENTS,
    patients
  }
}

export const receivePatient = patient => {
    return {
      type: RECEIVE_PATIENTDETAILS,
      patient
    }
  }