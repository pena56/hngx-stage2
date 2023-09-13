import { FC } from "react"
import { Link } from "react-router-dom"

import { Movie, getGenreName } from "@/api/types"
import { getCountryFromLanguageAbbreviation, getYearFromDate } from "@/lib"

interface MovieCardProps {
  data: Movie
}

export const MovieCard: FC<MovieCardProps> = ({ data }) => {
  return (
    <Link
      to={`/movies/${data?.id}`}
      data-testid="movie-card"
      className="w-[250px] mb-[54px] md:mb-[107px] mx-auto md:mx-0"
    >
      <div className="w-full h-[370px] relative">
        <img
          data-testid="movie-poster"
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          alt=""
        />

        <div className="w-full flex items-center justify-end z-20 absolute top-0 left-0 right-0 p-4">
          {/* <div className="px-2 py-[3px] bg-[#F3F4F680] rounded-xl">
              <p className="font-bold text-xs">TV SERIES</p>
            </div> */}

          <button className="w-[30px] h-[30px] bg-[#F3F4F680] rounded-full flex items-center justify-center ">
            <img src="/heart.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 pt-3">
        <p className="font-bold text-xs text-gray-400 text-left">
          <span>
            {getCountryFromLanguageAbbreviation(data?.original_language)},
          </span>

          <span data-testid="movie-release-date">
            {getYearFromDate(data?.release_date)}
          </span>
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
    </Link>
  )
}
