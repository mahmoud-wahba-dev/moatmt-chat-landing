import Link from "next/link";
import { FaArrowLeft, FaBolt } from "react-icons/fa";
import { TbAlertOctagon, TbAlertOctagonFilled } from "react-icons/tb";
import CustomerSupportCard from "./CustomerSupportCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoArrowUpLeft, GoDeviceMobile } from "react-icons/go";
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
                text="الباقات"
                bageBg="bg-primary"
                badgeColor="text-white"
                dotBg="bg-dot"
                textColor="text-white"
                badgeContainerClass="m-auto min-w-[161px] justify-center"
              />
            </div>
            <h3 className="font-semibold text-52px text-black mb-3">
              باقات مرنة… تناسب حجم أعمالك!
            </h3>
            <p className="font-medium text-22px text-dark-black">
              اختر الخطة التي تناسب فريقك واحتياجاتك — سواء كنت تبدأ بفريق بسيط
              أو تدير مؤسسة كبيرة، ستجد التسعيرة التي تناسبك تمامًا.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div>
            <div className="bg-body  rounded-40px px-11 py-9">
              <div>
                <Image
                  src={"/home/tag.svg"}
                  alt={"Price Tag Icon"}
                  width={64}
                  height={64}
                />
              </div>
              <h6 className="font-bold text-28px text-black">باقة كير</h6>
              <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-65px text-primary">189</span>
                  <span>
                    <Image
                      src={"/home/ryal.svg"}
                      alt={"Price Tag Icon"}
                      width={42}
                      height={47}
                    />
                  </span>
                </div>

                <div className="flex items-center gap-4 font-semibold text-base text-greey">
                  <span className="">/</span>
                  <span className="">30 يــــوم</span>
                </div>
              </div>

              <p className="mb-6 font-medium text-14px text-[#4D4D4D]">
                ابدأ باستخدام الأدوات الأساسية لإدارة فريقك بكفاءة. مثالي للفرق
                الصغيرة ذات الاحتياجات الأساسية.
              </p>
              <div className="mb-6 center_flex gap-5">
                <div className=" w-[104px] p-[3px] rounded-xl bg-[linear-gradient(90deg,#3337F5_0%,rgba(255,255,255,0)_100%)]"></div>
                <span className="font-bold text-base whitespace-nowrap">
                  ســوف تحصــل علــى :
                </span>
                <div className=" w-[104px] p-[3px] rounded-xl bg-[linear-gradient(90deg,#3337F5_0%,rgba(255,255,255,0)_100%)]"></div>
              </div>

              <div className="flex items-center gap-2 mb-2.5">
                <div>
                  <Image
                    src={"/home/check.svg"}
                    alt={"Check Icon"}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-semibold text-base text-black">
                  عدد الموظفين : 1
                </span>
              </div>

              <div className="mb-2.5">
                <div className="flex items-center gap-2 mb-3">
                  <div>
                    <Image
                      src={"/home/check.svg"}
                      alt={"Check Icon"}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-semibold text-base text-black">
                    عدد قنوات التواصل : 2
                  </span>
                </div>

                <div className="mb-0.5 px-11">
                  <p className="font-medium text-14px text-primary mb-1.5">
                    القنوات المدعومة هي :
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span>
                      <Image
                        src={"/home/tick.svg"}
                        alt={"Tick Icon"}
                        width={12}
                        height={12}
                      />
                    </span>
                    <span className="font-normal text-12px text-black">
                      واتساب الأعمال الرسمي API
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>
                      <Image
                        src={"/home/tick.svg"}
                        alt={"Tick Icon"}
                        width={12}
                        height={12}
                      />
                    </span>
                    <span className="font-normal text-12px text-black">
                      الفيسبوك والإنستقرام
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-2.5">
                <div className="flex items-center gap-2 mb-3">
                  <div>
                    <Image
                      src={"/home/check.svg"}
                      alt={"Check Icon"}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-semibold text-base text-black">
                    جميع المميزات الرئيسية
                  </span>
                </div>

                <div className="mb-0.5 px-11">
                  <p className="font-medium text-14px text-primary mb-1.5">
                    المميزات الرئيسية هي :
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span>
                      <Image
                        src={"/home/tick.svg"}
                        alt={"Tick Icon"}
                        width={12}
                        height={12}
                      />
                    </span>
                    <span className="font-normal text-12px text-black">
                      الأتمتة والرد الآلي
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>
                      <Image
                        src={"/home/tick.svg"}
                        alt={"Tick Icon"}
                        width={12}
                        height={12}
                      />
                    </span>
                    <span className="font-normal text-12px text-black">
                      تنسيق العمل وادارة الفريق
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-2.5">
                <div className="flex items-center gap-2 mb-3">
                  <div>
                    <Image
                      src={"/home/check.svg"}
                      alt={"Check Icon"}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-semibold text-base text-black">
                    ارسال واستلام رسائل غير محدود
                  </span>
                </div>
              </div>

              <div className="mb-2.5">
                <div className="flex items-center gap-2 mb-3">
                  <div>
                    <Image
                      src={"/home/check.svg"}
                      alt={"Check Icon"}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-semibold text-base text-black">
                    لا حدود على جهات الاتصال
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={"#"}
                  className="btn btn-primary w-full flex items-center justify-between h-[70px] rounded-11px font-bold text-24px"
                >
                  إشتــــرك الان
                  <div className="size-11 center_flex bg-white rounded-full ">
                    <GoArrowUpLeft className="text-primary size-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
