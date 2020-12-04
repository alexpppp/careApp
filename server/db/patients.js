const connection = require('./connection')

function getAllPatients (db = connection) {
  return db('patients').select()
}

function getPatientById (id, db = connection) {
  return db('patients')
    .where('id', id)
    .first()
}

function getPatientNotes (id, db = connection) {
  return db('notes')
    .join('users', 'notes.author_id', '=', 'users.id')
    .where('notes.patient_id', id)
    .select('*', 'notes.id AS id')
}

function addPatient (entry, db = connection) {
return
}

function updatePatient (id, entry, db = connection) {
return
}

function addNote (entry, db = connection) {
return
  }

module.exports = {
  getAllPatients,
  getPatientById,
  getPatientNotes,
  addPatient,
  updatePatient,
  addNote
}
