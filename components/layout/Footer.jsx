import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerCols = [
    {
      title: "عن مؤتمت",
      links: [
        { label: "من نحن", href: "/about" },
        { label: "شروط الاستخدام", href: "/terms" },
        { label: "شروط الخصوصية", href: "/privacy" },
        { label: "المدونة", href: "/#" },
        { label: "الأسعار", href: "#packages" },
        { label: "المزايا", href: "/#" },
      ],
    },
    {
      title: "منتجات مؤتمت",
      links: [
        { label: "مؤتمت بوت", href: "/#" },
        { label: "مؤتمت شات المؤسسي", href: "/#" },
        { label: "ثيمات مؤتمت", href: "/#" },
        { label: "نوتس للتسويق النفسي", href: "/#" },
        { label: "كونكتلي", href: "/#" },
        { label: "زيا", href: "/#" },
      ],
    },
    {
      title: "الخدمات المساندة",
      links: [
        { label: "الخدمات المصغرة", href: "/#" },
        { label: "أكاديمية مؤتمت", href: "/#" },
        { label: "مركز المساعدة", href: "/#" },
        { label: "مجتمع مؤتمت فالواتساب", href: "/#" },
        { label: "التسويق بالعمولة", href: "/#" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/share/1JR3fKCLS4/?mibextid=wwXIfr", label: "Facebook", icon: FaFacebook },
    { href: "https://www.instagram.com/moatmt.sa?igsh=MTA3NHF2ZWpyMzZkZw%3D%3D", label: "Instagram", icon: FaInstagram },
    { href: "https://www.tiktok.com/@moatmt.sa?_t=ZS-90WDjBNwJe5&_r=1", label: "Tiktok", icon: FaTiktok },
    { href: "https://x.com/moatmt?s=21", label: "Twitter", icon: FaXTwitter },
    { href: "#", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://www.snapchat.com/@moatmt.sa?sid=4daf2bfdbadf41519afc1d8fd6586463&share_id=BJAL3k5yS6GdLCQvmUpHbA&invite_id=B2EMS1LI", label: "Snapchat", icon: FaSnapchatGhost },
  ];
  return (
    <footer className=" text-black px-5 lg:px-20 pt-10 pb-6">
      <div className="footer grid grid-cols-1 sm:grid-cols-12  sm:footer-horizontal  text-white ">
        <aside className="sm:col-span-4 md:col-span-5 space-y-4">
          <div>
            <Image
              src="/logo_footer.svg"
              alt="Logo Footer"
              width={352}
              height={101}
            />
          </div>
          <p className="sm:w-[74%] text-black font-medium text-22px leading-8">
  منصة موحدة لخدمة العملاء جمعت لك مختلف وسائل التواصل بمكان واحدمن لوحة تحكم واحدة
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="" className="text-primary font-normal text-18px">
              تـــابعنا على
            </label>
            <svg
              width="21"
              height="2"
              viewBox="0 0 21 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H21" stroke="#2927F6" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {socialLinks.map(({ href, label, icon: IconComponent }, idx) => (
              <Link
                href={href}
                key={label}
                aria-label={label}
                className="bg-primary size-12 flex items-center justify-center rounded-full"
                target="_blank"
              >
                <IconComponent className="text-white size-4" />
              </Link>
            ))}
          </div>
          <div>
            <Image
              src="teqnia_ksa.svg"
              width={141}
              height={57}
              alt="Teqnia KSA"
            />
          </div>
        </aside>
        {footerCols.map((col, index) => (
          <nav key={index} className="sm:col-span-3 md:col-span-4 mt-8 sm:mt-0">
            <h6 className=" font-semibold text-25px text-primary max-lg:leading-8  mb-0 after:content-[''] after:block after:bg-white after:rounded-13px after:mt-5 after:w-10 after:h-1 after:bg-primary after:mt-2 mb-6">
              {col.title}
            </h6>

            {col.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="link link-hover text-base font-normal text-black mb-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div>
        <hr className="mt-6 mb-10 relative  text-transparent h-1 rounded-xl bg-[linear-gradient(90deg,#F7F8FF_0%,#7073FF_15.38%,#3A3EFF_48.56%,#5F62FF_83.65%,#FFFFFF_100%)]" />
      </div>

      <p className="font-normal text-14px text-center">
        &copy; جميع الحقوق محفوظة مؤتمت 2025
      </p>
    </footer>
  );
};

export default Footer;
