import SecWithImg from "./SecWithImg";

const ClientSupport = () => {
  return (
    <SecWithImg
      badgeColor={"bg-white"}
      badgeText={"دعم العملاء"}
      badgeTextColor={"text-primary"}
      badgeDotBg={"bg-dot"}
      sectionTitle1={" دعم متكامل..."}
      sectionTitle2={"للتوسّع !."}
      sectionDesc={
        "ميزات متقدمة تساعدك على النمو بثبات، عبر قنوات تواصل جديدة، وأدوات تسويقية وتطويرية تواكب توسّع نشاطك التجاري بكل احترافية."
      }
      sectionDescClassName={"!max-w-[86%]"}
      subscribeBtnContent={"إشتــــرك الان"}
      subscribeBtnClass={"w-fit text-primary"}
      subscribeBtnIconContainerClassName={"border-primary border  text-primary"}
      imgSrc={"client_support_img"}
      altText={"Client Support Section Image"}
      orderNumChild1={1}
      orderNumChild2={1}
    />
  );
};

export default ClientSupport;
