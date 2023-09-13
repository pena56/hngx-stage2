import { FC } from "react"

interface VideoPlayerProps {
  coverUrl?: string
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ coverUrl }) => {
  return (
    <div className="w-full h-[254px] md:h-[449px] rounded-[10px] md:rounded-[20px] relative">
      <img
        className="w-full h-[254px] md:h-[449px] object-cover rounded-[10px] md:rounded-[20px]"
        src={`https://image.tmdb.org/t/p/original/${coverUrl}`}
        alt=""
      />

      <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-2 bg-black/30 rounded-[10px] md:rounded-[20px]">
        <div className="w-[55px] md:w-[110px] h-[55px] md:h-[110px] rounded-full border-[2px] border-[#E8E8E833] bg-[#E8E8E833] flex items-center justify-center cursor-pointer">
          <img
            src="/video.svg"
            className="w-[27px] md:w-[54px] h-[27px] md:h-[54px] object-contain"
          />
        </div>

        <p className="text-[18px] md:text-[25px] font-medium text-[#E8E8E8] text-center">
          Watch Trailer
        </p>
      </div>
    </div>
  )
}
