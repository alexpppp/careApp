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
  return
}

function updatePatientEntry(req, res) {
  return
}

function addNoteEntry(req, res) {
  return
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