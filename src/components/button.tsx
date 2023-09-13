import { FC } from "react"

interface ButtonProps {
  label: string
  icon?: "play" | "tag"
  type?: "fit" | "full"
}

const icons = {
  play: "/play.svg",
  tag: "/tag.svg",
}

export const Button: FC<ButtonProps> = ({ label, icon, type = "fit" }) => {
  return (
    <button
      className={`uppercase text-white rounded-md flex items-center justify-center py-[6px] px-[16px] gap-2 bg-rose-700 hover:bg-rose-800 ${
        type === "fit" ? "w-fit" : "w-full"
      } text-sm font-bold`}
    >
      {icon && <img src={icons[icon]} />}

      {label}
    </button>
  )
}
