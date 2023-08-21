// Common Method for all the API Call Action

import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const ApiCallAction = async (method, endpoint, data = null) => {
  const token = process.env.REACT_APP_API_TOKEN
    

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
