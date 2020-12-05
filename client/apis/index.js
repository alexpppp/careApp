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




  // Global error handler for front end api's
function errorHandler(err) {
    console.error(err);
  }