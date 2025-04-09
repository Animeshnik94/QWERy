import { FaChevronRight } from 'react-icons/fa'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="m-auto w-[350px] xl:w-[1272px]">
      <div className="flex flex-col lg:flex-row  lg:justify-between mb-11">
        <div>
          <h1 className="text-4xl text-center lg:text-start font-bold mb-8 md:mb-0">
            QWERy
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <p className="mr-11 text-md mb-5 ">Ready to explore?</p>
          <button className="bg-[#FFA343] text-black px-[40px] py-[12px] rounded-lg font-bold">
            Get Started
          </button>
        </div>
      </div>
      <hr className="mb-11 border-t border-gray-300/30" />
      <div className="grid grid-cols-1 md:grid-cols-[43%_19%_19%_19%] gap-7 md:gap-0  mb-25">
        <div className="w-full col-span-1 lg:w-70">
          <h1 className="text-2xl mb-9 font-bold">
            Let s go on vacation, Make your day
          </h1>
          <form className="flex flex-row items-center">
            <input
              type="email"
              placeholder="Email address"
              className="pl-4 pr-15 py-2 border-b border-gray-300/30 focus:outline-none focus:border-b-[#FFA343] hover:border-b-[#FFA343] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#FFA343] text-black p-3.5 rounded-md"
            >
              <FaChevronRight></FaChevronRight>
            </button>
          </form>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <h3 className="text-5 text-[#FFD1A0]">Services</h3>
          <a href="#">Email Marketing</a>
          <a href="#">Campaigns</a>
          <a href="#">Branding</a>
          <a href="#">Offline</a>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <h3 className="text-5 text-[#FFD1A0]">About</h3>
          <a href="#">Our Story</a>
          <a href="#">Benefits</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <h3 className="text-5 text-[#FFD1A0]">Help</h3>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="flex items-center flex-row justify-between mb-10 md:mb-20">
        <div>
          <a className="mr-21 font-light" href="#">
            Terms & Conditions
          </a>
          <a className="font-light" href="#">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-row gap-5">
          <a href="#">
            <FaInstagram className="w-7 h-7 text-xl cursor-pointer" />
          </a>
          <a href="#">
            <FaTwitter className="w-7 h-7 text-xl cursor-pointer" />
          </a>
          <a href="#">
            <FaFacebook className="w-7 h-7 text-xl cursor-pointer" />
          </a>
        </div>
      </div>
      <p className="text-center opacity-50 mb-12">Copyright 2021 QWERy</p>
    </footer>
  )
}
