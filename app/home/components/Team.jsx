import Link from "next/link";
import { FaArrowLeft, FaBolt } from "react-icons/fa";
import { TbAlertOctagon, TbAlertOctagonFilled } from "react-icons/tb";
import CustomerSupportCard from "./CustomerSupportCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import Badge from "@/components/ui/Badge";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Image from "next/image";

const Team = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-9">
            <div className="bg-body rounded-66px p-9 min-h-[587px] flex items-end">
              <div>
                <div className="flex justify-end ">
                  <Image
                    src="/home/team_card1_img.webp"
                    alt="Smart Management Icon"
                    width={542}
                    height={278}
                    className=""
                  />
                </div>
                <div className="mb-10">
                  <Image
                    src="/home/team_card1_icon.svg"
                    alt="Smart Management Icon"
                    width={64}
                    height={64}
                    className=""
                  />
                </div>
                <h6 className="font-semibold text-30px text-black mb-5">
                  إدارة الموظـــــــفيـــــــن.
                </h6>
                <p className="font-medium text-18px text-dark-black leading-10">
                  اختر من ترغب في ضمّه لفريق الدعم، وامنح كل موظف صلاحياته بدقة
                  عبر مؤتمت شات. نظّم المهام، وفعّل أدوات التفاعل مثل: @المنشن
                  والرسائل المحققة، لتحسين التنسيق وسرعة الاستجابة داخل الفريق.
                </p>
              </div>
            </div>
            <div className="bg-body rounded-66px p-9 min-h-[578px] flex items-end">
              <div>
                <div className="flex justify-end ">
                  <Image
                    src="/home/team_card2_img.webp"
                    alt="Smart Management Icon"
                    width={388}
                    height={248}
                    className=""
                  />
                </div>
                <div className="mb-10">
                  <Image
                    src="/home/team_card2_icon.svg"
                    alt="Integration Icon"
                    width={64}
                    height={64}
                  />
                </div>
                <h6 className="font-semibold text-30px text-black mb-5">
                  أتمتــــــة المهــــــام.
                </h6>
                <p className="font-medium text-18px text-dark-black leading-10">
                  اجعل كل محادثة تذهب إلى الشخص المناسب تلقائيًا. قم بإسناد
                  المحادثات تلقائيًا حسب نوعها إلى الموظف المختص، وفقًا لدوره
                  وشروطك الخاصة — بدون تدخل يدوي، وبدقة عالية.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-body px-14 py-16 rounded-66px grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div>
                <div className="mb-10">
                  <Image
                    src="/home/team_card3_icon.svg"
                    alt="Half Circle Arrow"
                    width={64}
                    height={64}
                  />
                </div>
                <h6 className="font-semibold text-32px text-black mb-5">
                 إدارة المحادثات.
                </h6>
                <p className="font-medium text-20px text-dark-black lg:max-w-[90%]  ">
            رتّب محادثاتك بسهولة من خلال التصنيف والفلترة حسب معايير ذكية. واطّلع على أكثر من محادثة في نفس الوقت، ومن نفس المنصة — كل ذلك من صفحة واحدة وبدون أي تعقيد!
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/home/team_card3_img.webp"
                alt="Employee Section Image"
                width={1005}
                height={512}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
