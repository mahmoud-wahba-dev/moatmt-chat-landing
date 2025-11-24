import Link from "next/link";
import { FaArrowLeft, FaBolt } from "react-icons/fa";
import { TbAlertOctagon, TbAlertOctagonFilled } from "react-icons/tb";
import CustomerSupportCard from "./CustomerSupportCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import Badge from "@/components/ui/Badge";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";

const Packages = () => {
  return (
    <section className=" sm:my-28 my-12  sm:py-16 py-8 rounded-60px  ">
      <div className="container">
        <div className="flex justify-center text-center mb-16">
          <div>
            <div className="mb-1.5 m-auto">
              <Badge
                text="الفريق"
                bageBg="bg-primary"
                badgeColor="text-white"
                dotBg="bg-dot"
                textColor="text-white"
                badgeContainerClass="m-auto min-w-[161px] justify-center"
              />
            </div>
            <h3 className="font-semibold text-52px text-black mb-3">
              فريقك يشتغل بذكاء… مو بكثرة!
            </h3>
            <p className="font-medium text-22px text-dark-black">
              كوّن فريقًا منسجمًا يعمل بتواصل ذكي، وادرس أداء المحادثات بوضوح
              لتقدم خدمة عملاء أسرع بأقل مجهود.
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-9"></div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
