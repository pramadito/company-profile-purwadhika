import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Goal,
    title: "Paspor Diplomatik dan Dinas",
    description:
      "Pelayanan pengurusan paspor diplomatik dan dinas untuk keperluan resmi pemerintah.",
    image: "/services/passport.png"
  },
  {
    icon: BookCheck,
    title: "Exit Permit dan Rekomendasi Visa",
    description:
      "Proses pengajuan exit permit dan rekomendasi visa untuk perjalanan dinas ke luar negeri.",
      image: "/services/visa.png"
  },
  {
    icon: ChartPie,
    title: "Legalisasi Dokumen",
    description:
      "Pelayanan legalisasi dokumen resmi untuk keperluan internasional dan administrasi.",
      image: "/services/dokumen.png"
  },
  {
    icon: Users,
    title: "Safe Travel",
    description:
      "Layanan konsultasi dan informasi keamanan perjalanan untuk diplomat dan pejabat pemerintah.",
      image: "/services/safe-travel.png"
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
          Layanan Kami
        </h2>
        <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none 
              transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] hover:border-purple-400 hover:scale-[1.02]"
            >
              <CardHeader>
                <feature.icon className="text-purple-600" />
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto p-0">
                <div className="h-40 w-full relative">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full mt-4 py-2 bg-purple-600 text-white font-medium rounded-lg
                  hover:bg-purple-700 transition-colors duration-300 hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]">
                    Selengkapnya
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;