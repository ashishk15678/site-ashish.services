"use client";
import { Comp } from "@/components/comp";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
const poppings = Poppins({ weight: "900", subsets: ["latin"] });

export default function Page() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: position.y - 20,
          left: position.x - 10,
          width: size,
          height: size,
          borderRadius: "50%",
          mixBlendMode: "difference",
          background: size == 20 ? "white" : "#9e9793",
          pointerEvents: "none",
          zIndex: 1000,
          cursor: "none",
          display: "grid",
          gridPlaceItems: "center",
        }}
      ></div>
      <div className="w-full h-full">
        <div className="w-full h-[100dvh] cursor-none grid place-items-center relative overflow-hidden">
          <div className="absolute z-[-99] object-cover overflow-hidden">
            <Image
              src={
                "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3hld29hNGthYmZ4bHA0MGRpeTBpZmhudGtqeWY3dXMwajY0eGhtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JoVV55m3KZHdxlpFZ6/giphy.webp"
              }
              height={800}
              width={3500}
              alt=""
              loading="lazy"
              className="blur-2xl relative object-fill overflow-hidden"
            />
          </div>
          {/* <div className="absolute left-28 top-12 text-xl">
            <div className="text-yellow-500 font-extrabold">
              ashish.services
            </div>
          </div> */}
          <div className="lg:text-[8rem] md:text-[4rem] text-[2rem] absolute text-w text-zinc-500">
            <p className={("", poppings.className)}>Hii , I AM ASHISH</p>
            <div className="text-change">
              <p className={("", poppings.className)}>Hii , I AM ASHISH</p>
            </div>
            <p className={("", poppings.className)}>Hii , I AM ASHISH</p>
          </div>
        </div>
        Hii
      </div>
    </>
  );
}
