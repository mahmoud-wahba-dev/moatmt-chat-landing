import Badge from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
const faqs = [
  {
    question: "هل توجد أي رسوم أو تكاليف على الاشتراك في مؤتمت شات؟",
    answer:
      "لا، مؤتمت شات متاح للجميع التجاري، سواء كان متجرك على سلة أو زد أو حتى محل تجاري مستقل أو نشاط خاص - بدون أي استثناء.",
  },
  {
    question: "كيف يمكنني تفعيل مؤتمت شات على متجري (سلة، زد، وغيرها)؟",
    answer:
      "متاح لجميع المنصات، فقط اربط الحساب واتبع التعليمات في لوحة التحكم.",
  },
  {
    question: "كيف أربط حساب واتساب الخاص بمتجري مع مؤتمت شات؟",
    answer:
      "يمكنك الربط بسهولة عبر الإعدادات الخاصة بحسابك، وستجد شرح وخطوات واضحة في صفحة الدعم.",
  },
  {
    question: "هل يشترط وجود متجري على سلة أو زد لاستخدام مؤتمت شات؟",
    answer:
      "لا يشترط، الخدمة متاحة لأي نشاط تجاري لديه واتساب أعمال بغض النظر عن المنصة.",
  },
  {
    question: "هل يمكنني إضافة أكثر من قناة تواصل في مؤتمت شات؟",
    answer: "نعم، تستطيع إضافة قنوات متعددة حسب احتياجك من الإعدادات.",
  },
  {
    question: "هل هناك رسوم إضافية على الرسائل السوقية المرسلة عبر واتساب؟",
    answer: "لا توجد أي رسوم إضافية على هذه الخدمة.",
  },
  {
    question: "هل يمكن إرسال الرسائل إلى إرسالي من خلال المنصة؟",
    answer: "نعم، يمكنك إرسال الرسائل للعملاء من خلال منصة مؤتمت بكل سهولة.",
  },
];

const Faq = () => {
  return (
    <section className="sm:my-28 my-12  sm:py-16 py-8  bg-white rounded-44px py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24  ">
          <div className="lg:col-span-4">
            <div className="flex  items-center h-full">
              <div className="">
                <div className="mb-2.5">
                  <Badge
                    text="الأسئلة الشائعة"
                    textColor={"white"}
                    badgeContainerClass={"bg-primry"}
                  />
                </div>
                <h2 className="font-semibold text-52px  mb-9 ">
                  أسئلة كثير نسمعها…
                  <br />
                  جاوبنا عليها !.
                </h2>
                <p className="font-medium text-22px text-dark-black ">
                  احصل على إجابات واضحة للأسئلة الشائعة لتسهيل فهمك وتحقيق
                  النجاح.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
