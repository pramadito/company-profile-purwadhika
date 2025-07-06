import HeroPage from "@/app/(home)/_components/hero";

import OverviewPage from "@/app/(home)/_components/overview";
import Image from "next/image";
import AboutUsHomeComponents from "./_components/about-us";
import TestimonialHomeComponents from "./_components/testimonials";
import ProductHomePage from "./_components/services";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <ProductHomePage />
      <OverviewPage />
      <TestimonialHomeComponents />
      <AboutUsHomeComponents />
    </div>
  );
}
