import Badge from "@/components/ui/Badge";
import BtnSubscribe from "@/components/ui/BtnSubscribe";
import Image from "next/image";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const SecWithImg = ({
  imgSrc,
  altText,
  badgeColor,
  badgeText,
  badgeTextColor,
  badgeDotBg,

  sectionTitle1,
  sectionTitle2,
  sectionDesc,
  sectionDescClassName,
  subscribeBtnContent,
  subscribeBtnClass,
  subscribeBtnIconContainerClassName,

  orderNumChild1,
  orderNumChild2,
}) => {
  const orderClasses = {
    1: "order-1",
    2: "order-2",
  };
  return (
    <section className="bg-primary rounded-60px py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className={orderClasses[orderNumChild1]}>
            <div>
              <Image
                src={`/home/${imgSrc}.webp`}
                alt={altText}
                width={636}
                height={428}
              />
            </div>
          </div>
          <div className={orderClasses[orderNumChild2]}>
            <div className="flex items-center">
              <div>
                <div className="mb-2.5">
                  <Badge
                    badgeColor={badgeColor}
                    text={badgeText}
                    textColor={badgeTextColor}
                    dotBg={badgeDotBg}
                  />
                </div>
                <h3 className="font-bold text-64px text-white mb-5">
                  {sectionTitle1}
                  <br />
                  {sectionTitle2}
                </h3>
                <p
                  className={`font-medium text-24px text-white mb-14 max-w-xl ${sectionDescClassName}`}
                >
                  {sectionDesc}
                </p>
                <div>
                  <BtnSubscribe
                    content={subscribeBtnContent}
                    className={subscribeBtnClass}
                    iconContainerClassName={subscribeBtnIconContainerClassName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecWithImg;
