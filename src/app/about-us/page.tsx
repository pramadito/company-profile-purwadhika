import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
  Globe,
  FileText,
  Home,
  Phone,
} from "lucide-react";

const AboutPage = () => {
     const features = [
    {
      title: "Visi Kami",
      description: "Menjadi pionir dalam memberikan solusi inovatif yang berdampak positif bagi masyarakat dan lingkungan.",
      image: "/tentang-kami/visi-global-diplomasi.webp",
      alt: "Visi Diplomasi Global Indonesia"
    },
    {
      title: "Misi Kami",
      description: "Memberikan pelayanan terbaik melalui inovasi berkelanjutan, kolaborasi strategis, dan komitmen pada kualitas.",
      image: "/tentang-kami/misi-pelayanan-konsuler.webp",
      alt: "Misi Pelayanan Konsuler WNI"
    },
    {
      title: "Nilai Inti",
      description: "Integritas, Inovasi, Kolaborasi, dan Tanggung Jawab Sosial menjadi pondasi setiap langkah kami.",
      image: "/tentang-kami/nilai-tanggungjawab-sosial.webp",
      alt: "Nilai Integritas Diplomat"
    },
    {
      title: "Sejarah",
      description: "Berdiri sejak 2010, kami telah berkembang dari tim kecil menjadi organisasi nasional yang diakui.",
      image: "/tentang-kami/sejarah-diplomasi-kemerdekaan.webp",
      alt: "Sejarah Kementerian Luar Negeri"
    },
    {
      title: "Tim Kami",
      description: "Didukung oleh profesional berpengalaman dari berbagai disiplin ilmu yang berdedikasi tinggi.",
      image: "/tentang-kami/tim-diplomat-kemlu.webp",
      alt: "Tim Diplomat Kemlu 2024"
    },
    {
      title: "Pencapaian",
      description: "Meraih berbagai penghargaan industri dan pengakuan atas kontribusi kami di bidang ini.",
      image: "/tentang-kami/visi-global-diplomasi.webp",
      alt: "Pencapaian Penghargaan ASEAN 2023"
    },
  ];

  const kemluFaq = [
    {
      icon: Globe,
      question: "Apa saja layanan Kementerian Luar Negeri?",
      answer:
        "Kemlu menyediakan layanan konsuler, penerbitan paspor, informasi visa, dan bantuan untuk WNI di luar negeri.",
    },
    {
      icon: FileText,
      question: "Bagaimana cara melapor jika paspor hilang di luar negeri?",
      answer:
        "Segera hubungi Perwakilan RI terdekat dan laporkan ke polisi setempat untuk mendapatkan surat keterangan kehilangan.",
    },
    {
      icon: Route,
      question: "Bagaimana cara melacak pengajuan paspor saya?",
      answer:
        "Lacak pengajuan paspor melalui sistem online kami menggunakan ID aplikasi yang diberikan saat pengajuan.",
    },
    {
      icon: Home,
      question: "Apa yang harus dilakukan WNI dalam situasi darurat di luar negeri?",
      answer:
        "Hubungi segera Perwakilan RI terdekat atau nomor darurat Kemlu +62 811 192 191 untuk mendapatkan bantuan.",
    },
    {
      icon: ShieldCheck,
      question: "Bagaimana Kemlu melindungi WNI di luar negeri?",
      answer:
        "Kemlu memberikan perlindungan melalui Perwakilan RI, termasuk bantuan hukum, evakuasi, dan pendampingan kasus.",
    },
    {
      icon: Phone,
      question: "Bagaimana cara menghubungi Kemlu untuk pertanyaan konsuler?",
      answer:
        "Hubungi Pusat Panggilan Kemlu di 1500-131 atau email ke poskotri@kemlu.go.id untuk informasi konsuler.",
    },
  ];

  return (
    <div className="space-y-20 py-12">
      {/* Tentang Kami Section */}
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
            Tentang Kami
          </h2>
          <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dalam visi, misi, dan nilai-nilai yang menjadi dasar setiap karya kami.
          </p>
          
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col text-start">
                <div className="mb-5 sm:mb-6 w-full aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-2xl font-semibold tracking-tight">
                  {feature.title}
                </span>
                <p className="mt-2 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kemlu FAQ Section */}
      <div className="min-h-[50vh] flex items-center justify-center px-6">
        <div className="max-w-screen-lg w-full">
          <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
            Layanan Kementerian Luar Negeri
          </h2>
          <p className="mt-3 text-lg text-center text-muted-foreground">
            Informasi penting tentang layanan konsuler dan perlindungan WNI.
          </p>

          <div className="mt-12 grid md:grid-cols-2 rounded-xl gap-4">
            {kemluFaq.map(({ question, answer, icon: Icon, image, alt }) => (
              <div key={question} className="border p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-2 text-[1.35rem] font-semibold tracking-tight">
                      {question}
                    </div>
                    <p className="text-muted-foreground">{answer}</p>
                    {image && (
                      <img 
                        src={image} 
                        alt={alt}
                        className="mt-4 rounded-lg w-full h-auto max-h-40 object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPage;