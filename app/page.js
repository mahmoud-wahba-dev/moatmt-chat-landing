import CustomerSupport from "./home/components/CustomerSupport";
import Employee from "./home/components/Employee";
import Faq from "./home/components/Faq";
import HeroSec from "./home/components/HeroSec";

import PreFooter from "./home/components/PreFooter";

export default function Home() {
  return (
    <section className="">
      <HeroSec />
      <CustomerSupport />
      <Employee />
      {/* <Faq /> */}
      {/* <PreFooter /> */}
    </section>
  );
}
