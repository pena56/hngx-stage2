import { FC } from "react"
import { Link } from "react-router-dom"

interface footerProps {}

export const Footer: FC<footerProps> = () => {
  return (
    <footer className="w-full py-16 flex items-center justify-center">
      <div className="flex flex-col items-center gap-[36px]">
        <div className="flex items-center justify-center gap-12">
          <Link to="#">
            <img src="/facebook.svg" alt="" />
          </Link>
          <Link to="#">
            <img src="/instagram.svg" alt="" />
          </Link>
          <Link to="#">
            <img src="/twitter.svg" alt="" />
          </Link>
          <Link to="#">
            <img src="/youtube.svg" alt="" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          <Link to="#">
            <p className="font-bold text-lg text-gray-900">Conditions of Use</p>
          </Link>
          <Link to="#">
            <p className="font-bold text-lg text-gray-900">Privacy & Policy</p>
          </Link>
          <Link to="#">
            <p className="font-bold text-lg text-gray-900">Press Room</p>
          </Link>
        </div>

        <p className="font-bold text-lg text-gray-500 text-center">
          © 2021 MovieBox by Adriana Eka Prayudha
        </p>
      </div>
    </footer>
  )
}
