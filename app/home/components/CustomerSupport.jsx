import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { TbAlertOctagon, TbAlertOctagonFilled } from "react-icons/tb";
import CustomerSupportCard from "./CustomerSupportCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import Badge from "@/components/ui/Badge";

const CustomerSupport = () => {
  return (
    <section className="bg-body sm:my-28 my-12  sm:py-16 py-8 rounded-60px  ">
      <div className="container">
        <div className="mb-2.5">
          <Badge
            text="خدمــــة العــملاء"
            bageBg="bg-primary"
            badgeColor="text-white"
            dotBg="bg-dot"
            textColor="text-white"
          />
        </div>

        <div className="flex items-center justify-between gap-32 max-sm:flex-wrap mb-14">
          <h2 className="font-semibold text-52px text-black">
            لماذا لا تكفيك وسائل التواصل الاجتماعي
          </h2>
          <p className="font-medium text-22px text-dark-black max-w-[41%] max-sm:max-w-full">
            لأنك لست مشروعًا عاديًا… أنت علامة تجارية تستحق منصة تعكس قيمتك،
            تواكب طموحك، وتلبي احتياجات عملائك بشكل احترافي. وسائل التواصل
            الاجتماعي لم تُصمَّم لأجلك – لكنها مجرد أداة، لا أكثر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
          <div className="lg:border-e [border-image-source:linear-gradient(180deg,#2C2AF6,#FFFFFF)] [border-image-slice:1]">
            <CustomerSupportCard
              icon={TbAlertOctagonFilled}
              title="دون أفق للتوسع والتحسين."
              description='غياب أدوات إدارة الفريق، وتتبع الأداء، وتقارير واضحة يعني أنك تعمل "بالعين المجردة"! لا مجال للتحسين إن لم تستطع رؤية الأخطاء بوضوح.'
              linkHref="#"
            />
          </div>
          <div className="lg:border-e [border-image-source:linear-gradient(180deg,#2C2AF6,#FFFFFF)] [border-image-slice:1] ">
            <CustomerSupportCard
              icon={BsPersonLinesFill}
              title="محدودية عدد الموظفين."
              description="عدد قليل من المستخدمين في كل حساب لا يكفي لتقديم خدمة عملاء سريعة وفعالة. لن تستطيع مواكبة الكم الهائل من الرسائل والاستفسارات كما يجب."
              linkHref="#"
            />
          </div>
          <CustomerSupportCard
            icon={GoDeviceMobile}
            title="التشتّت بين المنصات."
            description="رغم اجتهادك في استخدام أدوات مختلفة، ستبقى قدراتك محدودة. المنصات الاجتماعية لم تُصمَّم لإدارة تجربة عميل احترافية – بل لمستخدم عادي."
            linkHref="#"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
