import Badge from "@/components/ui/Badge";
import BtnSubscribe from "@/components/ui/BtnSubscribe";
import Image from "next/image";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const SecWithImg = () => {
  return (
    <section className="bg-primary rounded-60px py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div>
              <Image
                src="/home/emp_satisfaction_img.webp"
                alt="Section with Image"
                width={636}
                height={428}
              />
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <div className="mb-2.5">
                <Badge
                  badgeColor="bg-white"
                  text="رضاء العاملين"
                  textColor="text-primary"
                  dotBg="bg-dot"
                />
              </div>
              <h3 className="font-bold text-64px text-white mb-5">
                خدمة عملاء فورية...
                <br />
                رضا فوري! !.
              </h3>
              <p className="font-medium text-24px text-white mb-14 max-w-xl">
                استجب لعملائك في اللحظة المناسبة، وامنحهم تجربة دعم أسرع، أسهل،
                وأكثر احترافية… كل ذلك يعزز ولاءهم ويزيد مبيعاتك!
              </p>
              <div>
                <BtnSubscribe
                  content="إشتــــرك الان"
                  className="text-primary w-fit"
                  
                  iconContainerClassName="border-primry border  text-primry"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecWithImg;
