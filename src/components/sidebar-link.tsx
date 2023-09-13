import { FC } from "react"

interface SidebarLinkProps {
  label: string
  icon: "home" | "projector" | "tv" | "calender" | "logout"
  active?: boolean
}

export const SidebarLink: FC<SidebarLinkProps> = ({
  label,
  icon,
  active = false,
}) => {
  return (
    <div
      className={`w-full flex items-center gap-[15px] px-[42px] py-[28px] cursor-pointer relative ${
        active ? "bg-[#BE123C1A]" : "bg-transparent"
      } hover:bg-[#BE123C1A]`}
    >
      <img
        src={`/${icon}.svg`}
        alt=""
        className="w-[25px] h-[25px] object-contain"
      />

      <p className="font-semibold text-[20px] text-[#BE123C]">{label}</p>

      {active && (
        <div className="w-[6px] h-full absolute right-0 top-0 bottom-0 bg-[#BE123C] z-20" />
      )}
    </div>
  )
}
