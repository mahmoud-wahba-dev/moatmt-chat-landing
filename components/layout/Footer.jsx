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
  return (
    <footer className="footer grid grid-cols-1 sm:grid-cols-12 bg-[#00481C] sm:footer-horizontal  text-white p-10">
      <aside className="sm:col-span-4 space-y-4">
        <div>
          <Image
            src="/logo_footer.svg"
            alt="Logo Footer"
            width={249}
            height={58}
          />
        </div>
        <p className="sm:w-[74%] ">
          منصة سعودية تقدم أتمتة متكاملة لخدمات الواتساب مدعومة بروبوتات ذكاء
          اصطناعي لخدمة عملائك تغنيك عن الحاجة لفريق دعم كامل
        </p>
        <label htmlFor="">تـــابعنا على</label>
        <svg
          width="21"
          height="2"
          viewBox="0 0 21 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H21" stroke="#41FEA1" strokeWidth="2" />
        </svg>
        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="#"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaFacebook className="text-primary size-4" />
          </Link>
          <Link
            href="#"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaInstagram className="text-primary size-4" />
          </Link>
          <Link
            href="#"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaTiktok className="text-primary size-4" />
          </Link>
          <Link
            href="#"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaXTwitter className="text-primary size-4" />
          </Link>{" "}
          <Link
            href="#"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaLinkedin className="text-primary size-4" />
          </Link>{" "}
          <Link
            href="#"
            className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaSnapchatGhost className="text-primary size-4" />
          </Link>{" "}
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
      <nav className="sm:col-span-3">
        <h6 className=" font-bold text-25px text-white pb-5 mb-0 "
        
        >عن مؤتمت</h6>
        <Link href="#" className="link link-hover">
          من نحن
        </Link>
        <Link href="#" className="link link-hover">
          ⁠الاسئلة الشائعة
        </Link>
        <Link href="#" className="link link-hover">
          ⁠الشروط والأحكام
        </Link>
        <Link href="#" className="link link-hover">
          المدونة
        </Link>
        <Link href="#" className="link link-hover">
          ⁠الأسعار
        </Link>
        <Link href="#" className="link link-hover">
          ⁠المزايا
        </Link>
      </nav>
      <nav className="sm:col-span-3">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="sm:col-span-3">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
