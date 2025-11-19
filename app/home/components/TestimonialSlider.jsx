"use client"; // Important for Next.js App Router!

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import BtnTry from "@/components/ui/BtnTry";
import { HiStar } from "react-icons/hi";

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ type: "fraction", clickable: true }}
      navigation={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={24}
      speed={800}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      onSwiper={(swiper) => {
        // ensure autoplay starts (some envs require explicit start)
        try {
          swiper.autoplay && swiper.autoplay.start();
        } catch (e) {
          // ignore
        }
      }}
      className="mySwiper"
      aria-live="polite"
    >
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center justify-between mb-10 ">
              <div className="flex items-center gap-5 font-bold text-28px text-primary ">
                <BsPersonLinesFill className="size-8" />
                <p>قصص عملائنا</p>
              </div>

              <div>
                <Image
                  src="/home/testimonial_shape.svg"
                  alt="Testimonial 1"
                  width={90}
                  height={64}
                />
              </div>
            </div>
            <p className="font-light text-28px text-black mb-10">
              هكذا يصف عملاؤنا تجربتهم معنا. مواقف حقيقية، نتائج ملموسة، وآراء
              تعبّر عن الثقة.
            </p>
            <div className="w-fit ">
              <BtnTry
                className="bg-primary text-white h-[62px] gap-6"
                iconContainerClassName="bg-white text-primary"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-center justify-between mb-16">
              <div>
                <p className="font-bold text-14px text-primary mb-1">عبدالله</p>
                <p className="font-normal text-14px text-[#4D4D4D] ">
                  تاجر على منصة زد
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="font-bold text-12px text-primary">05 / 05</p>
                <HiStar className="text-[#2EE378] size-6" />
              </div>
            </div>
            <h3 className="font-bold text-42px mb-7">
              ‘’ حبيت طريقة عمل الذكاء الاصطناعي
              <br />
              والربط مع المتجر والتطور التقني هذا صار ضرورة لنا ! ‘’
            </h3>
            <p className="font-semibold text-22px text-[#4D4D4D]">
              ما توقعت يرد كذا، صراحة أنقذني من التوظيف وسهل الشغل على الموظفين!
            </p>
          </div>
        </div>
      </SwiperSlide>
            <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center justify-between mb-10 ">
              <div className="flex items-center gap-5 font-bold text-28px text-primary ">
                <BsPersonLinesFill className="size-8" />
                <p>قصص عملائنا</p>
              </div>

              <div>
                <Image
                  src="/home/testimonial_shape.svg"
                  alt="Testimonial 1"
                  width={90}
                  height={64}
                />
              </div>
            </div>
            <p className="font-light text-28px text-black mb-10">
              هكذا يصف عملاؤنا تجربتهم معنا. مواقف حقيقية، نتائج ملموسة، وآراء
              تعبّر عن الثقة.
            </p>
            <div className="w-fit ">
              <BtnTry
                className="bg-primary text-white h-[62px] gap-6"
                iconContainerClassName="bg-white text-primary"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-center justify-between mb-16">
              <div>
                <p className="font-bold text-14px text-primary mb-1">عبدالله</p>
                <p className="font-normal text-14px text-[#4D4D4D] ">
                  تاجر على منصة زد
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="font-bold text-12px text-primary">05 / 05</p>
                <HiStar className="text-[#2EE378] size-6" />
              </div>
            </div>
            <h3 className="font-bold text-42px mb-7">
              ‘’ حبيت طريقة عمل الذكاء الاصطناعي
              <br />
              والربط مع المتجر والتطور التقني هذا صار ضرورة لنا ! ‘’
            </h3>
            <p className="font-semibold text-22px text-[#4D4D4D]">
              ما توقعت يرد كذا، صراحة أنقذني من التوظيف وسهل الشغل على الموظفين!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <style jsx global>{`
        /* ensure navigation/pagination are visible and transitions feel smooth */
        .swiper-button-next,
        .swiper-button-prev {
          color: #0f172b;
        }
        .swiper-pagination {
          color: #0f172b;
        }
        .swiper-wrapper {
          transition-timing-function: ease !important;
        }
      `}</style>
    </Swiper>
  );
}
