import Link from "next/link";
import { FaArrowLeft, FaBolt } from "react-icons/fa";
import { TbAlertOctagon, TbAlertOctagonFilled } from "react-icons/tb";
import CustomerSupportCard from "./CustomerSupportCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import Badge from "@/components/ui/Badge";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";

const Employee = () => {
  return (
    <section className=" sm:my-28 my-12  sm:py-16 py-8 rounded-60px  ">
      <div className="container">
        <div className="mb-2.5">
          <Badge
            text="الموظف"
            bageBg="bg-primary"
            badgeColor="text-white"
            dotBg="bg-dot"
            textColor="text-white"
          />
        </div>

        <div className="flex items-center justify-between gap-32 max-sm:flex-wrap mb-16">
          <h2 className="font-semibold text-52px text-black">
            مؤتمت شات…
            <br />
            فريقك صار أقوى بموظف واحد !.
          </h2>
          <p className="font-medium text-22px text-dark-black max-w-[41%] max-sm:max-w-full">
            منصة ذكية صُمِّمت خصيصًا للمتاجر، تمكّن موظفًا واحدًا من التعامل
            بكفاءة مع عشرات المحادثات في وقت واحد، مما يرفع رضا العملاء ويقلّل
            التكاليف والضغط التشغيلي.
          </p>
        </div>

        <div className=" ">
          <div className="bg-body px-14 py-16 rounded-66px grid grid-cols-1 lg:grid-cols-2 gap-8 mb-9">
            <div className="flex items-center">
              <div>
                <div className="mb-10">
                  <Image
                    src="/home/half_cirlcle_arrow.svg"
                    alt="Half Circle Arrow"
                    width={64}
                    height={64}
                  />
                </div>
                <h6 className="font-semibold text-32px text-black mb-5">
                  قابليّــــــــــــة للتوسّــــــع.
                </h6>
                <p className="font-medium text-20px text-dark-black lg:max-w-lg max-w-sm ">
                  اختر الباقة التي تناسب حجم تجارتك، مع أدوات ذكية تساعدك على
                  النمو دون أن تضحي بكفاءة التشغيل.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/home/emp1.webp"
                alt="Employee Section Image"
                width={786}
                height={344}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-body rounded-66px p-9 min-h-[578px] flex items-end">
              <div>
                <div className="flex justify-end ">
                  <Image
                    src="/home/emp_card2.webp"
                    alt="Smart Management Icon"
                    width={542}
                    height={278}
                    className=""
                  />
                </div>
                <div className="mb-10">
                  <FaBolt className="size-12 text-primary" />
                </div>
                <h6 className="font-semibold text-30px text-black mb-5">
                  كفــــــــاءة إداريــــــــة ذكيــــــــة.
                </h6>
                <p className="font-medium text-18px text-dark-black leading-10">
                  نظّم فريقك، وزّع المهام، وراقب أداء المحادثات في الوقت الفعلي
                  — كل ذلك من مكان واحد وبأدوات بسيطة لكن قوية.
                </p>
              </div>
            </div>
            <div className="bg-body rounded-66px p-9 min-h-[578px] flex items-end">
              <div>
                <div className="flex justify-end ">
                  <Image
                    src="/home/emp_card3.webp"
                    alt="Smart Management Icon"
                    width={469}
                    height={267}
                    className=""
                  />
                </div>
                <div className="mb-10">
                  <Image
                    src="/home/emp3_icon.svg"
                    alt="Integration Icon"
                    width={64}
                    height={64}
                  />
                </div>
                <h6 className="font-semibold text-30px text-black mb-5">
                  تكامـــــــل شـــــــامل مع مؤتمـــــــت.
                </h6>
                <p className="font-medium text-18px text-dark-black leading-10">
                  كل رسائل عملائك، وبياناتهم، ومحادثاتهم… تظهر لك في لوحة تحكم
                  موحّدة. تواصل، تابع، حلّل، ونمِّ تجارتك دون تنقّل بين الأنظمة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employee;
