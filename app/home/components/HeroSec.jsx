import BtnMeta from "@/components/ui/BtnMeta";
import BtnConsult from "@/components/ui/BtnMeta";
import BtnSubscribe from "@/components/ui/BtnSubscribe";
import BtnTry from "@/components/ui/BtnSubscribe";
import Image from "next/image";
import React from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { PiPaperPlaneFill, PiPaperPlaneTiltBold } from "react-icons/pi";

const HeroSec = () => {
  return (
    <section className=" overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 hero-content w-full max-w-full flex-col lg:flex-row gap-24">
          <div>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="bg-secondary  text-white px-4 py-1.5 rounded-5px font-semibold text-14px sm:h-[34px] ">
                  جديـد
                </div>
                <p className="font-semibold text-base text-primary">
                  خدمــــة عمــلاء فــــــــــورية
                </p>
                <span>&#128293;</span>
              </div>
              <h1 className="font-bold  text-64px leading-[80px] text-[#101010] mb-6">
                مؤتمـــــــت شات تواصل أسهل
                <br />
                لا تضيــــــــع وقتــــــــك، تواصل فــــــــورًا
              </h1>

              <p className="font-medium text-22px  text-dark-black mb-11 ">
                منصة موحدة لخدمة العملاء جمعت لك مختلف وسائل التواصل بمكان
                واحدمن لوحة تحكُّم واحدة!
              </p>
              <div className="flex items-center gap-7 mb-10 max-sm:flex-wrap">
                <BtnSubscribe
                  content="انشئ حسابك الان"
                  className="text-white bg-primary"
                  icon={<PiPaperPlaneFill   className="-rotate-45" />}

                />
                <BtnMeta />
              </div>

          
            </div>
          </div>
          <div className="hover-3d">
            <div className="bg-[#F6F6F6] rounded-66px">
              <Image
                src="/home/hero.webp"
                alt="Hero Section Image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
