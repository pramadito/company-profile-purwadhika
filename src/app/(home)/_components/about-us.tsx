import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Image from "next/image";

import GoogleMapComponent from "./google-map";

import Link from "next/link";
import { Suspense } from "react";
const AboutUsHomeComponents = () => {
  return (
    <div className="container mx-auto px-8">
      <div className=" flex items-center justify-center py-16">
        <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Kontak Kami
          </h2>
          <div className="flex items-center pt-4">
            <Image src="logo.svg" alt="" height={400} width={300} />
          </div>
          <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              <div>
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <MailIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Email</h3>
                <p className="my-2.5 text-muted-foreground">
                  Our friendly team is here to help.
                </p>
                <Link
                  className="font-medium text-primary"
                  href="mailto:kontak-kami@kemlu.go.id"
                >
                  kontak-kami@kemlu.go.id
                </Link>
              </div>
              <div>
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <MessageCircle />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Live chat</h3>
                <p className="my-2.5 text-muted-foreground">
                  Our friendly team is here to help.
                </p>
                <Link className="font-medium text-primary" href="#">
                  Start new chat
                </Link>
              </div>
              <div>
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <MapPinIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Office</h3>
                <p className="my-2.5 text-muted-foreground">
                  Come say hello at our office HQ.
                </p>
                <Link
                  className="font-medium text-primary"
                  href="https://www.google.com/maps/place/6%C2%B010'33.5%22S+106%C2%B049'54.0%22E/@-6.175959,106.831652,12z/data=!4m4!3m3!8m2!3d-6.1759722!4d106.8316667?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Jl. Taman Pejambon No. 6 <br /> Jakarta Pusat, 10110,
                  Indonesia
                </Link>
              </div>
              <div>
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <PhoneIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Phone</h3>
                <p className="my-2.5 text-muted-foreground">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  className="font-medium text-primary"
                  href="tel:(+62 21) 344 1508"
                >
                  (+62 21) 344 1508
                </Link>
              </div>
            </div>
            {/* Form */}
            <div>
              <GoogleMapComponent></GoogleMapComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsHomeComponents;
