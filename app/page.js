import Faq from "./home/components/Faq";
import HeroSec from "./home/components/HeroSec";
import PreFooter from "./home/components/PreFooter";
// import OurPartners from "./home/components/OurPartners";
import SwiperSlider from "./home/components/SwiperSlider";
import WhoIsMoatmt from "./home/components/WhoIsMoatmt";
import WhyMoatmt from "./home/components/WhyMoatmt";

export default function Home() {
  return (
    <section className="bg-primary">
      <HeroSec />
      {/* <OurPartners /> */}
      <SwiperSlider />
      <WhoIsMoatmt />
      <WhyMoatmt />

      <Faq />
      <PreFooter />
    </section>
  );
}
