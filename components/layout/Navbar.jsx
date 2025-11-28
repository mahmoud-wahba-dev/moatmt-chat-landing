import React from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" text-black  sticky top-0 z-50 bg-white ">
      <div className="container max-w-full">
        <div className="navbar  max-sm:justify-between">
          <Link className="navbar-start" href="/">
            <Image src="/logo.svg" alt="Logo" width={298} height={99} />
          </Link>
          <div className="navbar-center">
            <div className="navbar-center hidden sm:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/" className="font-medium lg:text-24px ">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/#faqSec" className="font-medium lg:text-24px">
                    الاسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="/#packages" className="font-medium lg:text-24px">
                    البـــاقـــات
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 sm:w-52 p-2 shadow start-[-4rem] max-sm:w-40"
            >
              <li>
                <Link href="/">الرئيسية</Link>
              </li>

              <li>
                <Link href="/#faqSec"> الاسئلة الشائعة </Link>
              </li>

              <li>
                <Link href="/#packages"> البـــاقـــات </Link>
              </li>
              <div className="flex flex-col gap-4 mt-4 sm :hidden">
                <Link
                  className="btn btn-primary "
                  href="https://chat.moatmt.sa/app/login"
                  target="_blank"
                >
                  تسجيل دخول
                </Link>
              </div>
            </ul>
          </div>
          <div className="navbar-end gap-6 max-sm:hidden me-2">
            <Link
              className="btn btn-primary font-medium md:text-24px rounded-9px px-8 py-3 h-[60px]"
              href="https://chat.moatmt.sa/app/login"
              target="_blank"
            >
              تسجيل دخول
            </Link>
          </div>
          {/* <ThemeSwitcher /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
