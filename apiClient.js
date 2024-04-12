import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.cricapi.com/v1/currentMatches?apikey=9e36efde-f51e-4a33-a0b2-3c293ebedfff&offset=0",
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default function useApiClient() {
  return apiClient;
};
