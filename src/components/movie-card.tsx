import { FC, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Movie, getGenreName } from "@/api/types"
import { getCountryFromLanguageAbbreviation } from "@/lib"

interface MovieCardProps {
  data: Movie
}

export const MovieCard: FC<MovieCardProps> = ({ data }) => {
  const navigate = useNavigate()
  const [favourites, setFavourites] = useState<number[] | undefined>(() => {
    const fav = window.localStorage.getItem("favourites")

    if (!fav) {
      return undefined
    } else {
      const newFav = JSON.parse(fav)
      return newFav
    }
  })

  const addToFavourites = (id: number) => {
    const fav = window.localStorage.getItem("favourites")

    if (!fav) {
      window.localStorage.setItem("favourites", JSON.stringify([id]))
      setFavourites([id])
    } else {
      const newFav = JSON.parse(fav)
      if (isInFavourites(id)) return
      newFav.push(id)
      window.localStorage.setItem("favourites", JSON.stringify(newFav))
      setFavourites(newFav)
    }
  }

  const isInFavourites = (id: number) => {
    // const fav = window.localStorage.getItem("favourites")

    if (!favourites) return false
    const item = favourites?.find((item: number) => item === id)

    if (!item) return false
    return true
  }

  return (
    <div
      // to={`/movies/${data?.id}`}
      data-testid="movie-card"
      className="w-[250px] mb-[54px] md:mb-[107px] mx-auto md:mx-0"
    >
      <div className="w-full h-[370px] relative">
        <img
          onClick={() => navigate(`/movies/${data?.id}`)}
          data-testid="movie-poster"
          className="w-full h-full object-cover cursor-pointer"
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          alt=""
        />

        <div className="w-full flex items-center justify-end z-20 absolute top-0 left-0 right-0 p-4">
          {/* <div className="px-2 py-[3px] bg-[#F3F4F680] rounded-xl">
              <p className="font-bold text-xs">TV SERIES</p>
            </div> */}

          <button
            onClick={() => addToFavourites(data?.id)}
            className="w-[30px] h-[30px] bg-[#F3F4F680] rounded-full flex items-center justify-center hover:scale-110"
          >
            {/* <img src="/heart.svg" alt="" /> */}

            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.17157 1.48284C2.73367 -0.0381453 5.26633 -0.0381453 6.82842 1.48284L7.99999 2.62359L9.17157 1.48284C10.7337 -0.0381453 13.2663 -0.0381453 14.8284 1.48284C16.3905 3.00383 16.3905 5.46984 14.8284 6.99083L7.99999 13.6396L1.17157 6.99083C-0.390524 5.46984 -0.390524 3.00383 1.17157 1.48284Z"
                fill={isInFavourites(data?.id) ? "#ff0000" : "#D1D5DB"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        onClick={() => navigate(`/movies/${data?.id}`)}
        className="w-full flex flex-col gap-3 pt-3 cursor-pointer"
      >
        <p className="font-bold text-xs text-gray-400 text-left">
          <span>
            {getCountryFromLanguageAbbreviation(data?.original_language)},
          </span>

          <span data-testid="movie-release-date">{data?.release_date}</span>
        </p>

        <p
          data-testid="movie-title"
          className="font-bold text-lg text-gray-900 text-left"
        >
          {data?.title}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <img src="/imdb.svg" alt="" />

            <p className="text-gray-900 text-xs">
              {data?.vote_average * 10}/100
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src="/rt.svg" alt="" />

            <p className="text-gray-900 text-xs">{data?.vote_average * 10}%</p>
          </div>
        </div>

        {/* <div className="w-full flex flex-row">

            </div> */}

        <p className="font-bold text-xs text-gray-400 text-left">
          {data?.genre_ids?.map((id, index) => (
            <span key={id}>
              {getGenreName(id)}
              {data?.genre_ids?.length === index + 1 ? " " : ", "}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
