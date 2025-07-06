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
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="h-40 ml-6 rounded-tl-xl" >
                  <Image src={feature.image} alt="" width={400} height={300}></Image>
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