import axios from "axios"

export function axiosInstance() {
  return axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  })
}
