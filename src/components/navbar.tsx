import { FC, useState, useEffect } from "react"

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 px-2 pr-3 md:px-4 md:pr-6 py-3 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="w-full flex flex-row items-center justify-between md:max-w-[1244px] mx-auto">
        <button className="w-48 h-12">
          <img
            src="/logo.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </button>

        <div className="hidden md:flex w-[40%] max-w-[525px] items-center justify-between border-2 px-[10px] py-[6px] border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full text-white outline-none bg-transparent placeholder:text-white placeholder:text-base"
          />

          <button>
            <img src="/search.svg" alt="" />
          </button>
        </div>

        <button className="block md:hidden">
          <img src="/search.svg" alt="" />
        </button>

        <div className="hidden md:flex items-center gap-7">
          <p className="text-base text-white font-bold">Sign in</p>

          <button className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center">
            <img src="/menu.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  )
}
