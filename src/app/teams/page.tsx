export const dynamic = "force-dynamic";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface RandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface RandomUserResponse {
  results: RandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

const Team05Page = async () => {
  const response = await fetch("https://randomuser.me/api/?results=20");
  const randomUser = await response.json();
  return (
    <div className="flex flex-col justify-center pb-8 sm:pb-12 px-6 lg:px-8 max-w-screen-xl mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Struktur Organisasi
        </h2>
        <p className="mt-6 text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptates aliquid ducimus eveniet, placeat veniam! Libero voluptas
          distinctio delectus magni fugit, dolorem, ratione, natus aperiam animi
          doloremque nulla odit nam.
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {randomUser.results.map((user: RandomUser) => (
            <div key={`${user.name.first}-${user.name.last}`}>
              <img
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-full aspect-square rounded-lg object-cover bg-secondary"
                width={600}
                height={600}
              />
              <h3 className="mt-4 text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</h3>
              <p className="text-muted-foreground text-sm">{user.email}</p>
              <p className="mt-3 line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis adipisci, laudantium tenetur illum expedita
                suscipit dicta magni inventore iusto ipsa vero pariatur
                voluptatibus debitis ad assumenda maxime ullam maiores aut.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <Button
                  className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <TwitterIcon className="stroke-muted-foreground" />
                  </Link>
                </Button>
                <Button
                  className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <DribbbleIcon className="stroke-muted-foreground" />
                  </Link>
                </Button>
                <Button
                  className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <TwitchIcon className="stroke-muted-foreground" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Team05Page;
