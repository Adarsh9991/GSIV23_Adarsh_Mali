// Common Method for all the API Call Action

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const ApiCallAction = async (method, endpoint, data = null) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWU2ZWVjNjIwYjE3ZmQ0YWI1NDA0Nzg5NWE2MGNhZSIsInN1YiI6IjY0ZTAzNDg1YTNiNWU2MDFkYjFhYmFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QD-9wWbDbJ-NOsB17UDIimNckNhV-lqTfYz74370Oa0"
    

  const config = {
    method: method,
    url: `${BASE_URL}${endpoint}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default ApiCallAction;
