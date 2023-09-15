import { useParams } from "react-router-dom"

import { Sidebar, VideoPlayer } from "@/components"
import { useMovieDetail, useMovieCredits, useTopRatedTV } from "@/api"
import { findCrewByJob, getRandomItemsFromArray, getUTCDate } from "@/lib"
import { Movie } from "@/api/types"

export default function MovieDetail() {
  const { id }: { id?: number } = useParams()

  const { data } = useMovieDetail({ variables: { movie_id: id } })
  const credits = useMovieCredits({ variables: { movie_id: id } })
  const tv = useTopRatedTV()

  return (
    <div className="w-full h-screen relative bg-white flex max-w-[1512px] mx-auto">
      <Sidebar routeParam={id} />
      <main className="flex flex-col gap-4 md:gap-8 flex-1 py-[18px] md:py-[38px] px-3 md:px-[50px] overflow-y-scroll scrollbar-hide">
        <VideoPlayer coverUrl={data?.backdrop_path} />

        <div className="w-full h-full flex flex-col gap-6 px-3">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center font-bold md:text-2xl text-lg text-[#404040] md:gap-4 gap-2">
              <p data-testid="movie-title">{data?.title}</p>

              <span className="w-2 h-2 rounded-full bg-[#404040]" />

              <p data-testid="movie-release-date">
                {getUTCDate(data?.release_date)}
              </p>

              <span className="w-2 h-2 rounded-full bg-[#404040]" />

              <p>PG-13</p>

              <span className="w-2 h-2 rounded-full bg-[#404040]" />

              <p data-testid="movie-runtime">{data?.runtime}</p>

              {data?.genres?.map((item) => (
                <div
                  className="py-[2px] px-4 border border-[#F8E7EB] rounded-full"
                  key={item?.id}
                >
                  <p className="text-[15px] text-[#B91C1C] font-medium">
                    {item?.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center md:gap-2 gap-1">
              <img src="/star.svg" alt="" />

              <p className="font-medium text-[25px] text-[#E8E8E8]">
                {data?.vote_average}{" "}
                <span className="text-[20px] text-[#666666]">
                  | {data?.vote_count}
                </span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-5 w-full md:w-[70%]">
              <p
                data-testid="movie-overview"
                className="text-[18px] md:text-[20px] text-[#333333]"
              >
                {data?.overview}
              </p>

              <p className="text-[18px] md:text-[20px] text-[#333333]">
                Director:{" "}
                {findCrewByJob(credits?.data?.crew, ["Director"])?.map(
                  (item, index) => (
                    <span key={item?.id} className="text-[#BE123C]">
                      {item?.name}
                      {findCrewByJob(credits?.data?.crew, ["Director"])
                        ?.length ===
                      index + 1
                        ? ""
                        : ", "}
                    </span>
                  )
                )}
              </p>

              <p className="text-[18px] md:text-[20px] text-[#333333]">
                Writers:{" "}
                {findCrewByJob(credits?.data?.crew, [
                  "Screenplay",
                  "Writer",
                ])?.map((item, index) => (
                  <span key={item?.id} className="text-[#BE123C]">
                    {item?.name}
                    {findCrewByJob(credits?.data?.crew, [
                      "Screenplay",
                      "Writer",
                    ])?.length ===
                    index + 1
                      ? ""
                      : ", "}
                  </span>
                ))}
              </p>

              <p className="text-[18px] md:text-[20px] text-[#333333]">
                Stars:{" "}
                {credits?.data?.cast?.slice(0, 4).map((item, index) => (
                  <span key={item?.id} className="text-[#BE123C]">
                    {item?.name}
                    {credits?.data?.cast?.slice(0, 4)?.length === index + 1
                      ? ""
                      : ", "}
                  </span>
                ))}
              </p>

              <div className="w-full border border-[#C7C7C7] rounded-[10px] flex flex-col md:flex-row">
                <div className="px-[20px] py-[12px] bg-[#BE123C] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[10px] rounded-br-[10px] md:rounded-tr-none md:rounded-br-none">
                  <p className="text-[16px] md:text-[20px] text-white font-medium">
                    Top rated movie #65
                  </p>
                </div>

                <div className="flex flex-1 justify-between items-center px-[24px] py-[12px]">
                  <p className="text-[16px] md:text-[20px] text-[#333333] font-medium">
                    Awards 9 nominations
                  </p>

                  <img src="/expand.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full md:w-[30%]">
              <div className="w-full flex flex-col gap-3">
                <button
                  className={`text-white rounded-[10px] flex items-center justify-center py-[12px] px-[16px] gap-2 bg-rose-700 hover:bg-rose-800 w-full text-[16px] md:text-[20px] font-medium border border-rose-700`}
                >
                  <img src="/ticket.svg" alt="" />
                  See Showtimes
                </button>

                <button
                  className={`text-[#333333] rounded-[10px] flex items-center justify-center py-[12px] px-[16px] gap-2 bg-[#BE123C1A] w-full text-[16px] md:text-[20px] font-medium border border-rose-700`}
                >
                  <img src="/list.svg" alt="" />
                  More watch options
                </button>
              </div>

              <div className="w-full h-[229px] rounded-[10px] relative overflow-hidden">
                <div className="w-full h-full flex gap-1">
                  {getRandomItemsFromArray<Movie>(tv?.data?.results, 3)?.map(
                    (item) => (
                      <div key={item?.id} className="flex-1">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="w-full bg-[#12121280] px-4 py-2 flex items-center gap-3 absolute bottom-0 left-0 right-0">
                  <img src="/listW.svg" alt="" />

                  <p className="text-[#E8E8E8] font-medium text-sm">
                    The Best Movies and Shows in September
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
