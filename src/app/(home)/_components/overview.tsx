import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const overviews = [
  {
    category: "Pelayanan Diplomatik",
    title: "Meningkatkan Kepentingan Indonesia di Dunia",
    details:
      "Memperkuat posisi Indonesia dalam hubungan internasional melalui diplomasi strategis, perjanjian bilateral, dan kerjasama multilateral. Kedutaan kami di seluruh dunia menjadi gerbang pertukaran budaya dan kemitraan ekonomi.",
    tutorialLink: "https://kemlu.go.id/id/layanan",
  },
  {
    category: "Perlindungan Konsuler",
    title: "Melindungi Warga Indonesia di Luar Negeri",
    details:
      "Menyediakan layanan esensial dan perlindungan bagi WNI di luar negeri, termasuk layanan paspor, bantuan hukum, dan tanggap darurat dalam situasi krisis.",
    tutorialLink: "https://kemlu.go.id/id/konsuler",
  },
  {
    category: "Diplomasi Ekonomi",
    title: "Memperluas Peluang Perdagangan dan Investasi",
    details:
      "Memfasilitasi perjanjian perdagangan internasional dan mempromosikan ekspor Indonesia melalui diplomasi ekonomi. Kami menghubungkan pelaku usaha Indonesia dengan pasar dan investor global.",
    tutorialLink: "https://kemlu.go.id/id/ekonomi",
  },
  {
    category: "Diplomasi Budaya",
    title: "Memperkenalkan Warisan Budaya Indonesia ke Dunia",
    details:
      "Memperkenalkan keragaman budaya Indonesia yang kaya melalui acara internasional, pertukaran pendidikan, dan program seni untuk meningkatkan saling pengertian antar bangsa.",
    tutorialLink: "https://kemlu.go.id/id/budaya",
  },
  {
    category: "Kemitraan Global",
    title: "Membangun Aliansi Strategis Internasional",
    details:
      "Mengembangkan kemitraan komprehensif dengan negara dan organisasi internasional untuk mengatasi tantangan global dan meningkatkan peran Indonesia dalam urusan dunia.",
    tutorialLink: "https://kemlu.go.id/id/kemitraan",
  },
];

const OverviewPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Kementerian Luar Negeri Republik Indonesia
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {overviews.map((overview) => (
            <div
              key={overview.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {overview.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {overview.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {overview.details}
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={overview.tutorialLink} target="_blank">
                    Pelajari Selengkapnya <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;