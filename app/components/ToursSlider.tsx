'use client'

import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Read_more from './Read_more'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ToursSlider() {
  return (
    <div className="relative mx-auto w-[350px] h-[236px] lg:w-[1272px] lg:h-[857px]">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        loop={true}
        className="h-full w-full"
        onSlideChange={() => console.log('slieder ebashit')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative w-full h-full mx-auto">
            <Image
              src="/images/slider_images/slide2.jpg"
              alt="Горы индонезии"
              fill
              className="object-cover"
            ></Image>
            <div className="absolute flex flex-col text-center items-center justify-center inset-x-0 bottom-3 lg:bottom-10 mx-auto w-[300px] lg:w-[900px]">
              <div className="flex flex-row items-center mb-4 lg:mb-7 gap-3">
                <div className="block mr-1 lg:mr-3 w-7 lg:w-[72px] h-[2px] bg-[#FBD784]"></div>
                <h1
                  className=" text-[18px] uppercase"
                  style={{
                    color: '#FBD784',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  BROMO
                </h1>
                <div className="block ml-1 lg:ml-3 w-7 lg:w-[72px] h-[2px] bg-[#FBD784]"></div>
              </div>
              <h1
                className="text-[15px] lg:text-[64px] mb-4 lg:mb-10"
                style={{
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Steady your steps, we will climb together!
              </h1>
              <p
                className="hidden lg:block text-[12px] lg:text-[18px] mb-8"
                style={{
                  lineHeight: 1.3,
                }}
              >
                Enjoying the vast expanse of the sea of sea sand, witnessing the
                splendor of Mount Semeru that soars into the sky, and gazing at
                the beauty of the sun moving out of its bed or otherwise
                enjoying the dim twilight from the Bromo ridge is an
                unforgettable experience when visiting Bromo.
              </p>
              <Read_more></Read_more>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full mx-auto">
            <Image
              src="/images/slider_images/slide2.jpg"
              alt="Горы индонезии"
              fill
              className="object-cover"
            ></Image>
            <div className="absolute flex flex-col text-center items-center justify-center inset-x-0 bottom-3 lg:bottom-10 mx-auto w-[300px] lg:w-[900px]">
              <div className="flex flex-row items-center mb-4 lg:mb-7 gap-3">
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FBD784',
                  }}
                ></div>
                <h1
                  className="text-[18px] uppercase"
                  style={{
                    color: '#FBD784',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  BROMO
                </h1>
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FBD784',
                  }}
                ></div>
              </div>
              <h1
                className="text-[15px] lg:text-[64px] mb-4 lg:mb-10"
                style={{
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Steady your steps, we will climb together!
              </h1>
              <p
                className="hidden lg:block text-[12px] lg:text-[18px] mb-8"
                style={{
                  lineHeight: 1.3,
                }}
              >
                Enjoying the vast expanse of the sea of sea sand, witnessing the
                splendor of Mount Semeru that soars into the sky, and gazing at
                the beauty of the sun moving out of its bed or otherwise
                enjoying the dim twilight from the Bromo ridge is an
                unforgettable experience when visiting Bromo.
              </p>
              <Read_more></Read_more>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full mx-auto">
            <Image
              src="/images/slider_images/slide2.jpg"
              alt="Горы индонезии"
              fill
              className="object-cover"
            ></Image>
            <div className="absolute flex flex-col text-center items-center justify-center inset-x-0 bottom-3 lg:bottom-10 mx-auto w-[300px] lg:w-[900px]">
              <div className="flex flex-row items-center mb-4 lg:mb-7 gap-3">
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FBD784',
                  }}
                ></div>
                <h1
                  className="text-[18px] uppercase"
                  style={{
                    color: '#FBD784',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  BROMO
                </h1>
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FBD784',
                  }}
                ></div>
              </div>
              <h1
                className="text-[15px] lg:text-[64px] mb-4 lg:mb-10"
                style={{
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Steady your steps, we will climb together!
              </h1>
              <p
                className="hidden lg:block text-[12px] lg:text-[18px] mb-8"
                style={{
                  lineHeight: 1.3,
                }}
              >
                Enjoying the vast expanse of the sea of sea sand, witnessing the
                splendor of Mount Semeru that soars into the sky, and gazing at
                the beauty of the sun moving out of its bed or otherwise
                enjoying the dim twilight from the Bromo ridge is an
                unforgettable experience when visiting Bromo.
              </p>
              <Read_more></Read_more>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full mx-auto">
            <Image
              src="/images/slider_images/slide2.jpg"
              alt="Горы индонезии"
              fill
              className="object-cover"
            ></Image>
            <div className="absolute flex flex-col text-center items-center justify-center inset-x-0 bottom-3 lg:bottom-10 mx-auto w-[300px] lg:w-[900px]">
              <div className="flex flex-row items-center mb-4 lg:mb-7 gap-3">
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FBD784',
                  }}
                ></div>
                <h1
                  className="text-[18px] uppercase"
                  style={{
                    color: '#FBD784',
                    fontWeight: 700,
                    letterSpacing: 6,
                  }}
                >
                  BROMO
                </h1>
                <div
                  className="hidden md:block mr-3"
                  style={{
                    width: '72px',
                    height: '2px',
                    backgroundColor: '#FBD784',
                  }}
                ></div>
              </div>
              <h1
                className="text-[15px] lg:text-[64px] mb-4 lg:mb-10"
                style={{
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Steady your steps, we will climb together!
              </h1>
              <p
                className="hidden lg:block text-[12px] lg:text-[18px] mb-8"
                style={{
                  lineHeight: 1.3,
                }}
              >
                Enjoying the vast expanse of the sea of sea sand, witnessing the
                splendor of Mount Semeru that soars into the sky, and gazing at
                the beauty of the sun moving out of its bed or otherwise
                enjoying the dim twilight from the Bromo ridge is an
                unforgettable experience when visiting Bromo.
              </p>
              <Read_more></Read_more>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Кастомные кнопки */}
      <button className="custom-prev absolute left-1 lg:left-4 top-1/2 z-10 -translate-y-1/2 text-white  p-5 ">
        <FaChevronLeft size={24} />
      </button>
      <button className="custom-next absolute right-1 lg:right-4 top-1/2 z-10 -translate-y-1/2 text-white  p-5 ">
        <FaChevronRight size={24} />
      </button>
    </div>
  )
}
