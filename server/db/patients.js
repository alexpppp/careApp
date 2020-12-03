const connection = require('./connection')

function getAllPatients (db = connection) {
  return db('patients').select()
}

function getPatientAndNotesById (id, db = connection) {
  return db('patients')
    .join('notes', 'notes.patient_id', 'patients.id')
    .where('patients.id', id)
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
  getPatientAndNotesById,
  addPatient,
  addNote
}
