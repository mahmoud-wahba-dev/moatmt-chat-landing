"use client";

import Image from "next/image";

const logos = [
  "/partners/partner1.webp",
  "/partners/partner2.webp",
  "/partners/partner3.webp",
  "/partners/partner4.webp",
  "/partners/partner5.png",
  "/partners/partner6.webp",
  "/partners/partner7.webp",
];

export default function LogoMarquee() {
  return (
    <div className="relative bg-primary py-12 w-full overflow-hidden" dir="rtl">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="rounded-full bg-white border border-[#F3F4F6] shadow-[0px_2px_4px_-2px_#0000001A] flex items-center justify-center mx-6"
            style={{ width: 140, height: 140 }}
          >
            <Image
              src={logo}
              alt={`Partner logo ${i + 1}`}
              width={100}
              height={100}
              className="object-contain rounded-full"
            />
          </div>
        ))}
        {/* Duplicate for clean infinite loop */}
        {logos.map((logo, i) => (
          <div
            key={"dupe-" + i}
            className="rounded-full bg-white border border-[#F3F4F6] shadow-[0px_2px_4px_-2px_#0000001A] flex items-center justify-center mx-6"
            style={{ width: 140, height: 140 }}
          >
            <Image
              src={logo}
              alt={`Partner logo duplicate ${i + 1}`}
              width={100}
              height={100}
              className="object-contain rounded-full"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
