"use client";
import { Comp } from "@/components/comp";
import { useState, useEffect } from "react";
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
          background: size == 20 ? "#383634" : "#9e9793",
          pointerEvents: "none",
          zIndex: 1000,
          cursor: "none",
          display: "grid",
          gridPlaceItems: "center",
        }}
      ></div>
      <div className="w-full h-full">
        <div className="w-full h-[100dvh] cursor-none"></div>
      </div>
    </>
  );
}
