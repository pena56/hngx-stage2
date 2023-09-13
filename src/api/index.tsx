import { createQuery } from "react-query-kit"
import { Response, MovieDetail, Credits } from "./types"
import { axiosInstance } from "@/lib"

export const useNowPlaying = createQuery<Response>({
  primaryKey: "/movie/now_playing",
  queryFn: ({ queryKey: [primaryKey] }) => {
    return axiosInstance()
      .get(`${primaryKey}`)
      .then((res) => res.data)
  },
})

export const useTopRated = createQuery<Response>({
  primaryKey: "/movie/top_rated",
  queryFn: ({ queryKey: [primaryKey] }) => {
    return axiosInstance()
      .get(`${primaryKey}`)
      .then((res) => res.data)
  },
})

export const useTopRatedTV = createQuery<Response>({
  primaryKey: "/tv/top_rated",
  queryFn: ({ queryKey: [primaryKey] }) => {
    return axiosInstance()
      .get(`${primaryKey}`)
      .then((res) => res.data)
  },
})

type Variables = { movie_id?: number }

export const useMovieDetail = createQuery<MovieDetail, Variables>({
  primaryKey: "/movie",
  queryFn: ({ queryKey: [primaryKey, variables] }) => {
    return axiosInstance()
      .get(`${primaryKey}/${variables.movie_id}`)
      .then((res) => res.data)
  },
})

export const useMovieCredits = createQuery<Credits, Variables>({
  primaryKey: "/credits",
  queryFn: ({ queryKey: [primaryKey, variables] }) => {
    return axiosInstance()
      .get(`movie/${variables.movie_id}${primaryKey}`)
      .then((res) => res.data)
  },
})
