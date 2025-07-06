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
        <Image src="logo.svg" alt="" height={400} width={300}/>
        </div>
        <h1 className="animate-rotate-y animate-once mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Layanan Publik 
        </h1>
        <p className="animate-fade-right animate-once mt-6 text-[17px] md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
      </div>
    </div>
  );
};
export default HeroPage;