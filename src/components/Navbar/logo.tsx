import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <div className="flex items-center gap-2">
      <div>
        <Image src="/garuda.webp" className="h-16 w-auto" alt="garuda indonesia" height={150} width={100}/>
      </div>
      
      <h1 className="text-xs dark:text-white font-bold">
        KEDUTAAN BESAR <br />
        REPUBLIK INDONESIA
      </h1>
    </div>
  </Link>
);
