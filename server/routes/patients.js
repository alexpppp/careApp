const express = require("express");
const { getTokenDecoder } = require("authenticare/server");

const {
    getAllPatients,
    getPatientById,
    getPatientNotes,
    addPatient,
    updatePatient,
    addNote
} = require("../db/patients");

const router = express.Router();

router.get("/", getTokenDecoder(), getPatientList);
router.get("/:id", getTokenDecoder(), getPatientAndNotes);
router.post("/add", getTokenDecoder(), addPatientEntry);
router.post("/edit/:id", getTokenDecoder(), updatePatientEntry);
router.post("/addnote", getTokenDecoder(), addNoteEntry);
router.use(errorHandler);

function getPatientList(req, res) {
  return getAllPatients().then((patients) => {
    const sanitized = patients.map((patient) => {
      return {
        id: patient.id,
        firstName: patient.first_name,
        lastName: patient.last_name,
        nickName: patient.nickname,
        img: patient.img,
        birthdate: patient.birthdate,
        gender: patient.gender,
        phone: patient.phone,
        address: patient.Address
      }
    })
    return res.json(sanitized)
  })
}

function getPatientAndNotes(req, res) {
  const id = req.params.id;
  return getPatientById(id).then((patient) => {
    return getPatientNotes(id).then((notes) => {
      const sanitized = {
        id: patient.id,
        firstName: patient.first_name,
        lastName: patient.last_name,
        nickName: patient.nickname,
        img: patient.img,
        birthdate: patient.birthdate,
        gender: patient.gender,
        phone: patient.phone,
        address: patient.Address,
        notes: notes.map((note) => {
          return {
            id: note.id,
            title: note.title,
            content: note.content,
            date: note.date_created,
            author: note.username
          }
        })
    };
    return res.json(sanitized);
    })
  });
}

function addPatientEntry(req, res) {
  const entry = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    nickname: req.body.nickName,
    img: req.body.img,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    phone: req.body.phone,
    address: req.body.address
  };
  return addPatient(entry).then((count) => res.json(count[0]));
}

function updatePatientEntry(req, res) {
  const id = req.params.id
  const entry = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    nickname: req.body.nickName,
    img: req.body.img,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    phone: req.body.phone,
    address: req.body.address
  };
  return updatePatient(id, entry).then(()=>{
    res.redirect('/profile/' + id);
  })
}

function addNoteEntry(req, res) {
  const entry = {
    title: req.body.title,
    content: req.body.content,
    author_id: req.body.authorId,
    patient_id: req.body.patientId
  };
  return addNote(entry).then((count) => res.json(count[0]));
}

function errorHandler(err, req, res, next) {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Access denied." });
  } else {
    res.status(500).json({ message: "Ahoy! Errors to starboard!" });
  }
}
module.exports = router