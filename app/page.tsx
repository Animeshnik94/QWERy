import { FaInstagram, FaTwitter, FaFacebook, FaArrowDown } from 'react-icons/fa' // Импортируем иконки
import Image from 'next/image'
import Read_more from './components/Read_more'
import ToursSlider from './components/ToursSlider'

export default function Home() {
  return (
    <>
      <section className="mb-20 md:mb-65">
        <div className=" flex flex-col md:flex-row items-center">
          <div className=" flex-col items-start ">
            <div className="flex flex-row md:flex-col items-center mr-4">
              <p className="rotate-0 md:rotate-90 py-10 mr-2">Social Links</p>
              <div className="flex flex-row md:flex-col space-x-3 space-y-2">
                <FaInstagram className="text-xl cursor-pointer" />
                <FaTwitter className="text-xl cursor-pointer" />
                <FaFacebook className="text-xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:text-left justify-center flex-grow">
            <div className="max-w-230">
              <div className="flex items-center">
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FFC178',
                  }}
                ></div>
                <h1
                  className="text-[18px] uppercase"
                  style={{
                    color: '#FFC178',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  explore the Nature Beauty
                </h1>
              </div>
              <h1
                className="text-[71px]"
                style={{
                  fontWeight: 700,
                }}
              >
                Discover
              </h1>
              <h1
                className="text-[71px] mb-21"
                style={{
                  lineHeight: 1,
                }}
              >
                Wonderful Indonesia
              </h1>
              <a href="#" className="flex items-center justify-center">
                <p className="mr-1">Scroll down</p>
                <FaArrowDown className="text-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-0 lg:px-25 mb-10 lg:mb-45">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="relative w-[350px] h-[490px] md:w-[400px] md:h-[520px]">
            <Image
              src="/images/gori.png"
              alt="Горы инддонезии"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div>
            <div className="max-w-[552px]">
              <div className="flex mb-8 items-center text-left">
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FFC178',
                  }}
                ></div>
                <h1
                  className="text-[18px] uppercase"
                  style={{
                    color: '#FFC178',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  EAST nUSA TENGGARA
                </h1>
              </div>
              <h1
                className="text-[64px] mb-10"
                style={{
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Have you enjoyed your holiday?
              </h1>
              <p
                className="text-[18px] mb-6"
                style={{
                  lineHeight: 1.3,
                }}
              >
                You will be amazed if you take part in this sailing Komodo
                island tour package. So it is also mandatory for you, besides
                enjoying Komodo tourism on Komodo Island, you also have to taste
                the marine tourism. The beautiful waters of Komodo will make you
                meet many travelers from other countries.
              </p>

              <Read_more></Read_more>
            </div>
          </div>
        </div>
      </section>

      <ToursSlider></ToursSlider>

      <section className="px-0 lg:px-25 mt-10 lg:mt-45">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="max-w-[552px]">
              <div className="flex mb-8 items-center text-left">
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FFC178',
                  }}
                ></div>
                <h1
                  className="text-[18px] uppercase"
                  style={{
                    color: '#FFC178',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  INDONESIAN CULTURE
                </h1>
              </div>
              <h1
                className="text-[64px] mb-10"
                style={{
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Our culture here is very friendly to people
              </h1>
              <p
                className="text-[18px] mb-6"
                style={{
                  lineHeight: 1.3,
                }}
              >
                known for his politeness, manners and gentleness. This becomes a
                characteristic when they mingle with other tribes and become
                basic traits that are passed down by their ancestors.
              </p>

              <Read_more></Read_more>
            </div>
          </div>
          <div className="relative w-[350px] h-[490px] md:w-[400px] md:h-[520px]">
            <Image
              src="/images/girls.png"
              alt="Горы инддонезии"
              fill
              className="object-cover"
            ></Image>
          </div>
        </div>
      </section>
    </>
  )
}
