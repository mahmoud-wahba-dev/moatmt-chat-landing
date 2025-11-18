"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaCrown, FaBolt, FaMedal } from "react-icons/fa6";

const tabs = [
  { label: "شهري", value: "monthly" },
  { label: "سنوي", value: "yearly" },
];

const plans = [
  {
    title: "باقة بوت",
    icon: FaCrown,
    price: { monthly: 55, yearly: 500 },
    desc: "كامل الخصائص بمزايا البوت",
    features: ["الرد الآلي", "تقارير أساسية", "أسئلة & أجوبة", "تجربة مجانية"],
    btnText: "اشترك الآن",
    highlight: false,
  },
  {
    title: "باقة بروفيشنال",
    icon: FaMedal,
    price: { monthly: 99, yearly: 900 },
    desc: "الأفضل للمتاجر المتوسطة",
    features: [
      "إدارة الفريق",
      "أسئلة غير محدودة",
      "تحليل العملاء",
      "دعم متقدم",
    ],
    btnText: "اشترك الآن",
    highlight: true,
  },
  {
    title: "باقة كنترول",
    icon: FaBolt,
    price: { monthly: 299, yearly: 2700 },
    desc: "حل شامل للمنشآت الكبيرة",
    features: ["ربط API", "دعم مخصص", "تقارير متقدمة", "جميع مزايا الباقات"],
    btnText: "اطلب استشارة",
    highlight: false,
  },
];

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState("monthly");

  return (
    <section className="py-16 bg-gradient-to-b from-green-900 to-emerald-900 min-h-screen">
      <div className="container mx-auto">
        {/* Tabs */}
        <div
          className="flex justify-center mb-8 bg-white/9 w-fit rounded-40px p-2 max-w-md mx-auto p-2.5 backdrop-blur-3xl mb-14
"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={`bg-white/4 h-[58px] px-20 py-4  rounded-40px text-14px mx-2 font-bold text-white ${
                selectedTab === tab.value &&
                "bg-[linear-gradient(179.04deg,#FFFFFF_61.8%,#2EE378_122.92%)]  !text-[#1C0531]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  transition-all">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={i}
                className={`rounded-24px border border-[#E5E7EB]  bg-white flex flex-col  p-8 relative ${
                  plan.highlight ? " scale-105" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="bg-[#0A381C0D] size-16 rounded-16px center_flex">
                    <Icon className="text-primary text-[2rem]" />
                  </div>
                  <h3 className="font-semibold text-24px text-black">
                    {plan.title}
                  </h3>
                  <p className="text-base font-normal text-[#595959]">
                    {plan.desc}
                  </p>
                </div>
                <div className="my-4 text-center rounded-16px  bg-[linear-gradient(180deg,#F8F8F8_0%,#F0F0F0_100%)] p-6">
                  <div className="text-60px font-bold text-primary center_flex gap-2">
                    {plan.price[selectedTab]}{" "}
                    <span className="text-lg font-normal">
                      <Image
                        src="/home/ryal.svg"
                        alt="Currency"
                        width={30}
                        height={32}
                      />
                    </span>
                  </div>
                  <div className="center_flex gap-4 font-normal text-14px text-[#595959] ">
                    <p>غير شامل الضريبة</p>
                    <div>•</div>
                    <p>30 يوم</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-block rounded-14px h-[52px] text-base font-normal "
                  >
                    تجربة مجانية 5 أيام
                  </Link>
                </div>
                <div className="mb-6">
                  <hr className="text-black/10" />
                </div>
                <p className="font-normal text-black text-14px mb-3">
                  المميزات المتضمنة:
                </p>
                <ul className="flex-1 mb-7 space-y-2 text-right">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-green-500"
                    >
                      <span className="inline-block rounded-full p-1 bg-secondary size-5 center_flex">
                        <FaCheck className="text-white" />
                      </span>
                      <span className="text-black  font-medium text-base">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <hr className="text-black/10" />
                </div>
                <p className="font-normal text-black text-14px mb-4">
                  اشترك عبر:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <div className="sm:col-span-12 bg-[#CFF7EE] rounded-10px py-2.5">
                    <div className="h-5">
                      <Image
                        src="/home/salla.svg"
                        alt="Salla"
                        width={48}
                        height={20}
                        className="w-full h-full "
                      />
                    </div>
                    <div className="mt-1.5 center_flex gap-1">
                      <span className="font-semibold text-12px text-[#004D5A]">
                        55
                      </span>
                      <Image
                        src="/home/ryal_colored.svg"
                        alt="Currency"
                        width={15}
                        height={13}
                      />
                      <span className="font-semibold text-12px text-[#004D5A]">
                        شهريا
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-6 bg-[#64943E] rounded-10px py-2.5">
                    <div className="h-5">
                      <Image
                        src="/home/shopify.svg"
                        alt="Shopify"
                        width={48}
                        height={20}
                        className="w-full h-full "
                      />
                    </div>
                    <div className="mt-1.5 center_flex gap-1 text-white">
                      <span className="font-semibold text-12px ">55</span>
                      <Image
                        src="/home/ryal_white.svg"
                        alt="Currency"
                        width={15}
                        height={13}
                      />
                      <span className="font-semibold text-12px ">شهريا</span>
                    </div>
                  </div>
                  <div className="sm:col-span-6 bg-[#3C1C54] rounded-10px py-2.5">
                    <div className="h-5">
                      <Image
                        src="/home/zid.svg"
                        alt="Zid"
                        width={48}
                        height={20}
                        className="w-full h-full "
                      />
                    </div>
                    <div className="mt-1.5 center_flex gap-1 text-white">
                      <span className="font-semibold text-12px ">55</span>
                      <Image
                        src="/home/ryal_white.svg"
                        alt="Currency"
                        width={15}
                        height={13}
                        className="text-white"
                      />
                      <span className="font-semibold text-12px ">شهريا</span>
                    </div>
                  </div>
                </div>
                {/* <button
                  className={`w-full py-3 rounded-xl font-bold ${
                    plan.highlight
                      ? "bg-primary text-white"
                      : "bg-emerald-50 text-primary"
                  } transition`}
                >
                  {plan.btnText}
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
