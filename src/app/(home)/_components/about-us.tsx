import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Image from "next/image";
import GoogleMapComponent from "./google-map";
import Link from "next/link";

const AboutUsHomeComponents = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section - Left Aligned */}
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Kontak Kami
          </h2>
          <div className="w-full max-w-[250px]">
            <Image 
              src="logo.svg" 
              alt="Company Logo" 
              width={250}
              height={150}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {/* Email */}
            <div className="flex flex-col">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <MailIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 mb-3 text-muted-foreground">
                Our friendly team is here to help.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="mailto:kontak-kami@kemlu.go.id"
              >
                kontak-kami@kemlu.go.id
              </Link>
            </div>

            {/* Live Chat */}
            <div className="flex flex-col">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Live chat</h3>
              <p className="mt-2 mb-3 text-muted-foreground">
                Our friendly team is here to help.
              </p>
              <Link 
                className="font-medium text-primary hover:underline" 
                href="#"
              >
                Start new chat
              </Link>
            </div>

            {/* Office */}
            <div className="flex flex-col">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="mt-2 mb-3 text-muted-foreground">
                Come say hello at our office HQ.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="https://www.google.com/maps/place/6%C2%B010'33.5%22S+106%C2%B049'54.0%22E/@-6.175959,106.831652,12z/data=!4m4!3m3!8m2!3d-6.1759722!4d106.8316667?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jl. Taman Pejambon No. 6 <br /> 
                Jakarta Pusat, 10110, Indonesia
              </Link>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-2 mb-3 text-muted-foreground">
                Mon-Fri from 8am to 5pm.
              </p>
              <Link
                className="font-medium text-primary hover:underline"
                href="tel:(+62 21) 344 1508"
              >
                (+62 21) 344 1508
              </Link>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-full min-h-[400px] w-full rounded-lg overflow-hidden shadow-md">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHomeComponents;