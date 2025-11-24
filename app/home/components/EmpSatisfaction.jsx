import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { TbAlertOctagon, TbAlertOctagonFilled } from "react-icons/tb";
import CustomerSupportCard from "./CustomerSupportCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import Badge from "@/components/ui/Badge";
import SecWithImg from "./SecWithImg";

const EmpSatisfaction = () => {
  return (
    <SecWithImg
      badgeColor="bg-white"
      badgeText="رضاء العاملين"
      badgeTextColor="text-primary"
      badgeDotBg="bg-dot"
      sectionTitle1=" خدمة عملاء فورية..."
      sectionTitle2="رضا فوري! !."
      sectionDesc="استجب لعملائك في اللحظة المناسبة، وامنحهم تجربة دعم أسرع، أسهل، وأكثر احترافية… كل ذلك يعزز ولاءهم ويزيد مبيعاتك!"
      sectionDescClassName="!max-w-[86%]"
      subscribeBtnContent="إشتــــرك الان"
      subscribeBtnClass="w-fit text-primary"
      subscribeBtnIconContainerClassName="border-primary border text-primary"
      imgSrc="emp_satisfaction_img"
      altText="Employee Satisfaction Section Image"
  
    />
  );
};

export default EmpSatisfaction;
