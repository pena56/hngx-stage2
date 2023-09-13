import { useState, useEffect } from "react"

import { useNowPlaying } from "@/api"
import { Button } from "./button"
import { getRandomItemsFromArray } from "@/lib"
import { Movie } from "@/api/types"

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState<Movie[] | []>([])

  const { data } = useNowPlaying()

  useEffect(() => {
    setSlides(getRandomItemsFromArray<Movie>(data?.results))
  }, [data])

  useEffect(() => {
    const slidesInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (slides?.length < 1) {
          return prev
        } else if (prev === slides?.length - 1) {
          return 0
        } else {
          const newIndex = prev + 1
          return newIndex
        }
      })
    }, 10000)

    return () => clearInterval(slidesInterval)
  }, [slides?.length])

  return (
    <div className="w-full h-[560px] md:h-[600px] relative">
      {slides?.map((item, index) => (
        <div
          key={item?.id}
          className="absolute top-0 right-0 bottom-0 left-0 z-10"
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
            alt=""
            className={`absolute ${
              currentSlide === index ? "block" : "hidden"
            } top-0 left-0 bottom-0 right-0 w-full h-full object-cover`}
          />
        </div>
      ))}

      {slides?.length > 0 && (
        <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute bg-black/50 z-20 p-3 md:p-6 flex items-center">
          <div className="w-full h-full md:max-w-[1244px] mx-auto flex flex-row items-center">
            <div className="w-full max-w-[80%] md:max-w-[404px] flex flex-col gap-4">
              <p className="font-bold text-white text-5xl font-sans">
                {slides[currentSlide].title}
              </p>

              <div className="flex gap-[34px] items-center">
                <div className="flex items-center gap-[10px]">
                  <img src="/imdb.svg" alt="" />

                  <p className="text-white text-xs">
                    {slides[currentSlide].vote_average * 10}/100
                  </p>
                </div>

                <div className="flex items-center gap-[10px]">
                  <img src="/rt.svg" alt="" />

                  <p className="text-white text-xs">
                    {slides[currentSlide].vote_average * 10}%
                  </p>
                </div>
              </div>

              <p className="text-white text-sm font-medium">
                {slides[currentSlide].overview}
              </p>

              <Button label="watch trailer" icon="play" />
            </div>
          </div>

          <div className="absolute right-3 md:right-6">
            <div className="flex flex-col gap-[10px]">
              {slides?.map((_, index) => (
                <button
                  onClick={() => setCurrentSlide(index)}
                  key={_.id}
                  className={`font-bold ${
                    currentSlide === index
                      ? "text-base text-white"
                      : "text-xs text-gray-400"
                  } relative cursor-pointer ${
                    currentSlide !== index
                      ? "hover:scale-125 hover:text-white"
                      : ""
                  }`}
                >
                  {currentSlide === index && (
                    <span className="w-[20px] h-[3px] rounded-md bg-white absolute left-[-32px] top-[10px]" />
                  )}

                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
