import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import React from "react";
const HeroPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center mt-23 ">
      
      <div className="text-center  max-w-2xl">
        <div className="flex items-center justify-center">
        <Image src="logo.svg" alt="" height={400} width={300} className="aspect-auto"/>
        </div>
        <h1 className="animate-rotate-y animate-once mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
        </h1>
        <p className="animate-fade-right animate-once mt-6 text-[17px] md:text-lg px-4 py-2">
          KEMUDAHAN & PELAYANAN PELINDUNGAN WNI
        </p>
      </div>
    </div>
  );
};
export default HeroPage;