import ClientSupport from "./home/components/ClientSupport";
import CustomerSupport from "./home/components/CustomerSupport";
import Employee from "./home/components/Employee";
import EmpSatisfaction from "./home/components/EmpSatisfaction";
import Faq from "./home/components/Faq";
import HeroSec from "./home/components/HeroSec";

import PreFooter from "./home/components/PreFooter";
import SecWithImg from "./home/components/SecWithImg";
import Team from "./home/components/Team";

export default function Home() {
  return (
    <section className="">
      <HeroSec />
      <CustomerSupport />
      <Employee />
      <EmpSatisfaction />
      <Team />
      <ClientSupport />

      {/* <Faq /> */}
      {/* <PreFooter /> */}
    </section>
  );
}
