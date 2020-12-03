const connection = require('./connection')

function getAllPatients (db = connection) {
  return db('patients').select()
}

function getPatientById (id, db = connection) {
  return db('patients')
    .where('id', id)
    .first()
}

function getPatientNotes (patient_id, db = connection) {
  return db('notes')
    .where('patient_id', patient_id)
    .select()
}

function addPatient (entry, db = connection) {
  return db('patients')
  .insert(entry)
}

function addNote (entry, db = connection) {
    return db('notes')
    .insert(entry)
  }

module.exports = {
  getAllPatients,
  getPatientById,
  getPatientNotes,
  addPatient,
  addNote
}
