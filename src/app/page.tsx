import HeroPage from "@/components/homepage/hero";

import OverviewPage from "@/components/homepage/overview";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroPage/>
      <OverviewPage/>
    </div>
  );
}
