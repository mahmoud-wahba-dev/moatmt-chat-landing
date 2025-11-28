import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const CustomerSupportCard = ({ icon: Icon, title, description, linkHref="#" }) => {
  return (
    <div className="">
      <div className="size-[66px] bg-black rounded-full center_flex  text-white mb-9">
        <Icon className="size-8" />
      </div>
      <h4 className="font-semibold text-30px text-black mb-9">{title}</h4>
      <p className="font-medium text-18px text-[#4D4D4D] mb-9 sm:max-w-[80%] leading-[40px]">
        {description}
      </p>
      <div>
        <div className="flex items-center gap-2.5 font-semibold text-primary text-base">
          <Link href={linkHref} className="">
            إقـــرأ المزيــــــد
          </Link>
          <FaArrowLeft className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportCard;
