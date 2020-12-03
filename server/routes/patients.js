const express = require("express");
const { getTokenDecoder } = require("authenticare/server");

const {
    getAllPatients,
    getPatientAndNotesById,
    addPatient,
    addNote
} = require("../db/patients");

const router = express.Router();

router.get("/", getTokenDecoder(), getPatientList);
router.use(errorHandler);

function getPatientList(req, res) {
  return getAllPatients().then((patients) => {
    const sanitized = patients.map((patient) => {
      return {
        patientId: patient.id,
        patientFirstName: patient.first_name,
        patientLastName: patient.last_name,
        patientNickName: patient.nickname,
        patientImg: patient.img,
        patientBirthdate: patient.birthdate,
        patientGender: patient.gender,
        patientPhone: patient.phone,
        patientAddress: patient.Address
      }
    })
    return res.json(sanitized)
  })
}

function errorHandler(err, req, res, next) {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Access denied." });
  } else {
    res.status(500).json({ message: "Something went RATHER wrong. Shame." });
  }
}
module.exports = router