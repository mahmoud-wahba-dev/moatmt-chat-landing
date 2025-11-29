import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
const packagesData = [
  {
    name: "باقة كير",
    price: 189,
    period: "30 يوم",
    href: "https://chat.moatmt.sa/app/login", // Link for this package
    badgeMostWanted: false,
    highlightBorder: false,
    description:
      "ابدأ باستخدام الأدوات الأساسية لإدارة فريقك بكفاءة. مثالي للفرق الصغيرة ذات الاحتياجات الأساسية.",
    benefits: [
      "عدد الموظفين : 1",
      "عدد قنوات التواصل : 2",
      {
        title: "القنوات المدعومة هي :",
        items: [
          "واتساب الأعمال الرسمي API",
          "الفيسبوك والإنستقرام",

          "ربط البريد الإلكتروني",
          "المحادثة المباشرة في الموقع",
          "التيلقرام",
          "الربط مع اي منصة عبر API",
        ],
      },
      "جميع المميزات الرئيسية",
      {
        title: "المميزات الرئيسية هي :",
        items: [
          "الأتمتة والرد الآلي",
          "تنسيق العمل وادارة الفريق",
          "تطبيق الموبايل iOS & Android",
          "جميع التحليلات والتقارير",
          "الإجرائات & الردود السريعة",
          "واجهة ادارة التطبيقات API",
        ],
      },
      "ارسال واستلام رسائل غير محدود",
      "لا حدود على جهات الاتصال",
    ],
  },
  {
    name: " باقة سبّورت",
    price: 575,
    period: "30 يوم",
    href: "https://chat.moatmt.sa/app/login", // Link for this package
    badgeMostWanted: true,
    highlightBorder: true,
    description:
      " ابدأ باستخدام الأدوات الأساسية لإدارة فريقك بكفاءة. مثالي للفرق الصغيرة ذات الاحتياجات الأساسية.",
    benefits: [
      "عدد الموظفين : 5",
      "عدد قنوات التواصل : 5",
      {
        title: "القنوات المدعومة هي :",
        items: [
          "واتساب الأعمال الرسمي API",
          "الفيسبوك والإنستقرام",
          "ربط البريد الإلكتروني",
          "المحادثة المباشرة في الموقع",
          "التيلقرام",
          "الربط مع اي منصة عبر API",
        ],
      },
      "جميع مميزات باقة كير +",
      {
        title: "  مميزات كير + : :",
        items: [
          "نظام توزيع محادثات ذكي للموظفين",
          "رد آلي متقدم ازرار تفاعلية + قوائم تفاعلية",
          "مزامنة بيانات العملاء مع الموقع او التطبيق",
          "جميع التحليلات والتقارير",
          "رسائل جماعية/تسويقية عبر الواتساب",
        ],
      },
      "ارسال واستلام رسائل غير محدود",
      "لا حدود على جهات الاتصال",
    ],
  },
  {
    name: " باقة كونكت",
    price: "1.150",
    period: "30 يوم",
    href: "https://chat.moatmt.sa/app/login", // Link for this package
    badgeMostWanted: false,
    highlightBorder: false,
    description:
      "ابدأ باستخدام الأدوات الأساسية لإدارة فريقك بكفاءة. مثالي للفرق الصغيرة ذات الاحتياجات الأساسية.",
    benefits: [
      "عدد الموظفين : 15",
      "عدد قنوات التواصل : غير محدود",
      {
        title: "القنوات المدعومة هي :",
        items: [
          "واتساب الأعمال الرسمي API",
          "الفيسبوك والإنستقرام",
          "ربط البريد الإلكتروني",
          "المحادثة المباشرة في الموقع",
          "التيلقرام",
          "الربط مع اي منصة عبر API",
        ],
      },
      "  جميع مميزات باقة كونكت +",
      {
        title: "المميزات الرئيسية هي :",
        items: [
          "  مدير حساب مخصص",
          "   كورس خاص لأعضاء الفريق",
          "   توفير دعم تقني متقدم للـ API ",
          "الذكاء الصناعي / OpenAi",
          "انشاء عملية اتمتة مخصصة",
        ],
      },
      "ارسال واستلام رسائل غير محدود",
      "لا حدود على جهات الاتصال",
    ],
  },
];

const Packages = () => {
  return (
    <section  id="packages" className="scroll-mt-14 sm:my-28 my-12  sm:py-16 py-8 rounded-60px  ">
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
          {packagesData.map((pkg, idx) => {
            // shared inner content (no outer border wrapper)
            const innerContent = (
              <>
                <div>
                  <Image
                    src={"/home/tag.svg"}
                    alt="Price Tag Icon"
                    width={64}
                    height={64}
                  />
                </div>
                <h6 className="font-bold text-28px text-black">{pkg.name}</h6>
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-65px text-primary">
                      {pkg.price}
                    </span>
                    <span>
                      <Image
                        src={"/home/ryal.svg"}
                        alt="Price Tag Icon"
                        width={42}
                        height={47}
                      />
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-semibold text-base text-greey">
                    <span>/</span>
                    <span>{pkg.period}</span>
                  </div>
                </div>
                <p className="mb-6 font-medium text-14px text-[#4D4D4D]">
                  {pkg.description}
                </p>
                <div className="mb-6 center_flex gap-5">
                  <div className="w-[104px] p-[3px] rounded-xl bg-[linear-gradient(90deg,#3337F5_0%,rgba(255,255,255,0)_100%)]"></div>
                  <span className="font-bold text-base whitespace-nowrap">
                    ســوف تحصــل علــى :
                  </span>
                  <div className="w-[104px] p-[3px] rounded-xl bg-[linear-gradient(90deg,#3337F5_0%,rgba(255,255,255,0)_100%)]"></div>
                </div>

                {/* Benefits */}
                {pkg.benefits.map((b, i) =>
                  typeof b === "string" ? (
                    <div key={i} className="flex items-center gap-2 mb-2.5">
                      <div>
                        <Image
                          src={"/home/check.svg"}
                          alt="Check Icon"
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="font-semibold text-base text-black">
                        {b}
                      </span>
                    </div>
                  ) : (
                    <div key={i} className="mb-2.5 px-11">
                      <p className="font-medium text-14px text-primary mb-1.5">
                        {b.title}
                      </p>
                      {b.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-1.5">
                          <span>
                            <Image
                              src={"/home/tick.svg"}
                              alt="Tick Icon"
                              width={12}
                              height={12}
                            />
                          </span>
                          <span className="font-normal text-12px text-black">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )
                )}

                <div className="mt-6">
                  <Link
                    href={pkg.href}
                    className="btn btn-primary w-full flex items-center justify-between h-[70px] rounded-11px font-bold text-24px"
                    target="_blank"
                 >
                    إشتــــرك الان
                    <div className="size-11 center_flex bg-white rounded-full ">
                      <GoArrowUpLeft className="text-primary size-6" />
                    </div>
                  </Link>
                </div>
              </>
            );

            // highlighted card: outer gradient as border via padding and inner rounded box
            if (pkg.highlightBorder) {
              return (
                <div
                  key={idx}
                  className="rounded-40px p-[2px] bg-[linear-gradient(180deg,#3337F5_0%,#FFFFFF_100%)]"
                >
                  <div className="bg-body rounded-[38px] px-11 py-9 relative overflow-hidden h-full">
                    {/* Most Wanted badge */}
                    {pkg.badgeMostWanted && (
                      <div className="absolute left-6 top-6 z-10">
                        <Badge
                          text="الاكثــر طلبــا"
                          bageBg="bg-primary"
                          badgeColor="text-white "
                          dotBg="bg-dot"
                          textColor="text-white font-bold text-12px"
                        />
                      </div>
                    )}

                    {innerContent}
                  </div>
                </div>
              );
            }

            // normal card (no gradient border)
            return (
              <div
                key={idx}
                className="bg-body rounded-40px px-11 py-9 relative"
              >
                {/* Most Wanted badge */}
                {pkg.badgeMostWanted && (
                  <div className="absolute left-6 top-6 z-10">
                    <Badge
                      text="الاكثــر طلبــا"
                      bageBg="bg-primary"
                      badgeColor="text-white "
                      dotBg="bg-dot"
                      textColor="text-white font-bold text-12px"
                    />
                  </div>
                )}

                {innerContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
