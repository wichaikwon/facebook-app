import Image from "next/image"
import React from "react"
interface NavbarProps {}
const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between bg-[#252426] p-2 px-4">
      <div className="flex flex-1 items-center gap-2">
        <Image src={"/svg/facebook_icon.svg"} alt="facebook_icon" width={40} height={40} />
        <div className="relative">
          <input
            type="search"
            className="rounded-full bg-[#38373a] p-2 pl-9 text-black outline-none"
            placeholder="ค้นหาบน Facebook:"
          />
          <Image
            src={"/svg/search_navbar.svg"}
            alt="search_navbar"
            className="absolute left-5 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex gap-2">
        {[
          "home_icon",
          "facebook_tv",
          "facebook_marketplace",
          "facebook_group",
          "facebook_games",
        ].map((item, idx) => (
          <button key={idx} className="rounded-md px-16 py-4 hover:bg-[#393939]">
            <Image src={`/svg/${item}.svg`} alt={`facebook_${item}`} width={28} height={28} />
          </button>
        ))}
      </div>
      <div className="flex flex-1 justify-end gap-4">
        {[
          "facebook_dot_grid",
          "facebook_messenger",
          "facebook_notification"
        ].map((item, idx) => (
          <button key={idx} className="bg-[#393939] rounded-full p-2">
            <Image src={`/svg/${item}.svg`} alt={`facebook_${item}`} width={24} height={24} />
          </button>
        ))}
        <button className="">
        <Image src={'/facebook_profile.jpg'} className="rounded-full" alt='facebook_profile' width={40} height={40} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
