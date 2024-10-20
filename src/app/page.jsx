import Link from "next/link";
import React from "react";
import Particles from "@/components/particles.tsx";

const navigation = [
  { name: "Github", href: "https://github.com/ashishk15678" },
  { name: "Email", href: "mailto:hi@ashish.services" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              target="_blank"
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 "
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Ashish
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Contact me and share ideas at{" "}
          <Link
            className="underline underline-offset-2"
            href={"https://instagram.com/ashishkumar15678"}
            target="_blank"
          >
            instagram
          </Link>{" "}
          or{" "}
          <Link
            href={"mailto:hi@ashish.services"}
            className="underline underline-offset-2"
            target="_blank"
          >
            mail me
          </Link>
        </h2>
      </div>
    </div>
  );
}
