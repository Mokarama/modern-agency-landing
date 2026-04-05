import navLogo from "../../assets/images/logo-dark.png";

export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-between px-5 py-4 md:px-10 md:py-5">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-[89px] h-[24px]" src={navLogo} alt="" />
      </div>

      {/* Nav Links (hide on mobile) */}
      <a href="#" className="hidden md:block text-[16px] text-[#202020] hover:text-black">Home</a>
      <a href="#" className="hidden md:block text-[16px] text-[#202020] hover:text-black">Pages</a>
      <a href="#" className="hidden md:block text-[16px] text-[#202020] hover:text-black">Portfolio</a>
      <a href="#" className="hidden md:block text-[16px] text-[#202020] hover:text-black">Blog</a>

      {/* Email (hide on mobile) */}
      <a href="mailto:info@floka.com" className="hidden md:block text-[16px] text-[#202020]">
        info@floka.com
      </a>

      {/* Dots (hide on mobile) */}
      <div className="hidden md:grid grid-cols-3 gap-[3px]">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-[3px] h-[3px] rounded-full bg-gray-500" />
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer">
        ☰
      </div>

    </nav>
  );
}