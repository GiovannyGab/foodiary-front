import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://cyb1iunebh.execute-api.us-east-1.amazonaws.com",
});
