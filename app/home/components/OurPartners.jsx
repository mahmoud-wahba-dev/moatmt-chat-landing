// "use client";
// import React from "react";
// import Image from "next/image";

// /**
//  * Place partner images in: /public/partners/
//  * Example filenames used below — replace with your real files.
//  */
// const partners = [
//   "partner1.png",
//   "partner2.png",
//   "partner3.png",
//   "partner4.png",
//   "partner5.png",
//   "partner6.png",
// ];

// export default function OurPartners({ className = "" }) {
//   // duplicate list for seamless loop
//   const slides = [...partners, ...partners];

//   return (
//     <section className={`our-partners bg-primary ${className}`} aria-label="شركاؤنا">
//       <div className="marquee-wrap" dir="rtl">
//         <div className="marquee" role="list">
//           {slides.map((file, i) => (
//             <div key={`${file}-${i}`} className="marquee-item" role="listitem">
//               <div className="marquee-img">
//                 <Image
//                   src={`/partners/${file}`}
//                   alt={`شريك - ${file}`}
//                   fill
//                   style={{ objectFit: "contain" }}
//                   priority={false}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <noscript>
//         <div className="grid grid-cols-3 gap-4" dir="rtl" aria-hidden>
//           {partners.map((file) => (
//             <div key={`noscript-${file}`} className="p-2 bg-white rounded">
//               <img
//                 src={`/partners/${file}`}
//                 alt={`شريك - ${file}`}
//                 style={{ width: "100%", height: "auto", objectFit: "contain" }}
//               />
//             </div>
//           ))}
//         </div>
//       </noscript>

//       <style jsx>{`
//         .marquee-wrap {
//           overflow: hidden;
//           width: 100%;
//           direction: rtl;
//           background: transparent;
//         }

//         .marquee {
//           display: flex;
//           gap: 24px;
//           align-items: center;
//           /* duration controls speed: lower = faster */
//           animation: marqueeAnim 24s linear infinite;
//           will-change: transform;
//         }

//         .marquee-item {
//           flex: 0 0 auto;
//           width: 160px;
//           height: 72px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 6px;
//           background: transparent;
//         }

//         .marquee-img {
//           position: relative;
//           width: 140px;
//           height: 64px;
//         }

//         /* pause animation on hover (desktop) */
//         .marquee-wrap:hover .marquee {
//           animation-play-state: paused;
//         }

//         @keyframes marqueeAnim {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); } /* moves half because slides duplicated */
//         }

//         /* responsive sizing */
//         @media (max-width: 1024px) {
//           .marquee-item { width: 130px; height: 64px; }
//           .marquee-img { width: 110px; height: 52px; }
//         }
//         @media (max-width: 640px) {
//           .marquee-item { width: 100px; height: 48px; }
//           .marquee-img { width: 86px; height: 40px; }
//           .marquee { gap: 12px; animation-duration: 20s; }
//         }
//       `}</style>
//     </section>
//   );
// }
