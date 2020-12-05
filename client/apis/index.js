import request from "superagent";

import { getEncodedToken } from "authenticare/client";

const apiUrl = "/api/v1/patients";

function prepHeaders() {
    return {
        Accept: "application/json",
        Authorization: `Bearer ${getEncodedToken()}`,
    };
}

export function apiGetAllPatients() {
    return request
        .get(apiUrl + "/")
        .set(prepHeaders())
        .then((res) => res.body)
        .catch(errorHandler);
}

export function apiGetPatientById(id) {
    return request
        .get(apiUrl + "/" + id)
        .set(prepHeaders())
        .then((res) => res.body)
        .catch(errorHandler);
}

export function apiAddPatient(entry) {
    return request
        .post(apiUrl + "/add")
        .set(prepHeaders())
        .send(entry)
        .then((res) => res.body);
  }

export function apiUpdatePatient(id, entry) {
    return request
        .patch(apiUrl + "/edit/" + id)
        .set(prepHeaders())
        .send(entry)
        .then((res) => res.body);
  }

  // Global error handler for front end api's
function errorHandler(err) {
    console.error(err);
  }