import { FC } from "react"
import { Link } from "react-router-dom"

import { SidebarLink } from "./sidebar-link"

interface SidebarProps {
  routeParam?: number
}

export const Sidebar: FC<SidebarProps> = ({ routeParam }) => {
  return (
    <aside className="hidden md:flex w-[226px] h-full flex-col justify-between gap-14 border-r border-black/30 rounded-tr-[45px] rounded-br-[45px] overflow-y-scroll scrollbar-hide pb-[52px]">
      <div>
        <Link to="/">
          <div className="w-full py-[52px] px-[20px]">
            <div className="w-full flex items-center justify-between">
              <img
                src="/icon.svg"
                alt=""
                className="w-12 h-12 object-contain"
              />

              <p className="text-2xl font-bold text-[#333333]">Movie Box</p>
            </div>
          </div>
        </Link>

        <div>
          <Link to="/">
            <SidebarLink label="Home" icon="home" />
          </Link>
          <Link to={`/movies/${routeParam}`}>
            <SidebarLink label="Movies" icon="projector" active />
          </Link>
          <Link to={`#`}>
            <SidebarLink label="TV Series" icon="tv" />
          </Link>
          <Link to={`#`}>
            <SidebarLink label="Upcoming" icon="calender" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="px-7">
          <div className="w-full border border-[#BE123CB2] rounded-[20px] p-4 pt-[42px] flex flex-col gap-[9px] bg-[#F8E7EB66]">
            <p className="text-[15px] font-semibold text-[#333333CC]">
              Play movie quizes and earn free tickets
            </p>

            <p className="text-[12px] font-medium text-[#666666]">
              50k people are playing now
            </p>

            <button className="bg-[#BE123C33] rounded-[30px] font-medium text-[12px] text-[#BE123C] px-[17px] py-[6px]">
              Start playing
            </button>
          </div>
        </div>

        <SidebarLink label="Log out" icon="logout" />
      </div>
    </aside>
  )
}
