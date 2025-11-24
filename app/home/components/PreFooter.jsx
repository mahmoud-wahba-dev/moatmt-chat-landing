import BtnMeta from "@/components/ui/BtnMeta";
import BtnConsult from "@/components/ui/BtnMeta";
import BtnSubscribe from "@/components/ui/BtnSubscribe";
import BtnTry from "@/components/ui/BtnSubscribe";
import Image from "next/image";
import React from "react";

const PreFooter = () => {
  return (
    <section className="bg-[linear-gradient(139.42deg,#3337F5_21.22%,#1E208F_88.76%)]    text-white text-center rounded-53px overflow-hidden mt-56 md:py-24 py-24 ">
      <div className="container">
        <p className="font-semibold text-32px  mb-6 ">مؤتمت</p>
        <h2 className="font-bold text-64px  mb-7">
          الذكاء مو بس للتقنية… صار جزء من!.
          <span className="text-[#55CDFF]"> البزنس الناجح</span> !.
        </h2>
        <p className="font-normal text-22px text-white mb-16 sm:w-[57%] mx-auto mb-6">
          مؤتمت هو نظام ذكاء اصطناعي متكامل يعمل على واتساب، يساعدك في الرد على
          عملاءك لحظيًا وبدون تدخل يدوي.
        </p>
        <div className="center_flex gap-7  flex-col max-sm:flex-wrap">
          <BtnSubscribe content={"إشتــــرك الان"}
          iconContainerClassName="border border-primary text-primary"
          className="text-primary min-w-[236px] "
          />
          <BtnMeta imgWidth={236} imgHeight={122}  />
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
