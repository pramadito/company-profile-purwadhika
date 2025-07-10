"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Retno Marsudi",
    designation: "Menteri Luar Negeri",
    company: "Kemlu RI",
    testimonial:
      "Pelayanan Kementerian Luar Negeri terus berkomitmen untuk melindungi WNI di luar negeri dan memperjuangkan kepentingan nasional di forum internasional.",
    avatar: "",
  },
  {
    id: 2,
    name: "Prof. Hasan Kleib",
    designation: "Duta Besar RI untuk PBB",
    company: "PTRI New York",
    testimonial:
      "Diplomasi Indonesia di PBB semakin diperhitungkan. Kami berhasil memperjuangkan berbagai isu strategis mulai dari perdamaian dunia hingga pembangunan berkelanjutan.",
    avatar: "",
  },
  {
    id: 3,
    name: "I Gusti Agung Wesaka Puja",
    designation: "Dirjen Protokol dan Konsuler",
    company: "Kemlu RI",
    testimonial:
      "Layanan konsuler kami terus ditingkatkan untuk memenuhi kebutuhan WNI di luar negeri.",
    avatar: "",
  },
  {
    id: 4,
    name: "Siti Nugraha Mauludiah",
    designation: "Direktur Diplomasi Ekonomi",
    company: "Kemlu RI",
    testimonial:
      "Diplomasi ekonomi telah membuka banyak peluang bagi produk Indonesia di pasar global.",
    avatar: "",
  },
  {
    id: 5,
    name: "Andri Hadi",
    designation: "Duta Besar RI untuk Prancis",
    company: "KBRI Paris",
    testimonial:
      "Melalui diplomasi budaya, kami berhasil memperkenalkan kekayaan seni dan budaya Indonesia ke Eropa.",
    avatar: "",
  },
  {
    id: 6,
    name: "Michael Tene",
    designation: "Wakil Sekretaris Jenderal ASEAN",
    company: "Sekretariat ASEAN",
    testimonial:
      "Indonesia memainkan peran kunci dalam berbagai inisiatif ASEAN.",
    avatar: "",
  },
];

const TestimonialHomeComponents = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center py-12 px-6">
      <div className="w-full">
        <h2 className="mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
          Testimonials
        </h2>
        <div className="container w-full lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-12">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index * 3)}
                className={cn("h-3 w-3 rounded-full border-2 border-primary", {
                  "bg-primary": current >= index * 3 + 1 && current <= (index + 1) * 3,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="bg-accent rounded-xl p-6 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 fill-muted-foreground stroke-muted-foreground" />
        ))}
      </div>
    </div>
    <p className="text-lg leading-relaxed font-medium mb-6">
      &quot;{testimonial.testimonial}&quot;
    </p>
    <div className="mt-auto flex items-center gap-4">
      <Avatar className="w-10 h-10">
        <AvatarFallback className="text-sm font-medium bg-primary text-primary-foreground">
          {testimonial.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.designation}</p>
      </div>
    </div>
  </div>
);

export default TestimonialHomeComponents;