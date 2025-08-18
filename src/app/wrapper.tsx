"use client";
import react, { createContext } from "react";
import { useTheme } from "./providers";
export default function Wrapper({ children }: { children: react.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div>
      <div
        className={`min-h-screen transition-colors duration-300 ${theme == "dark" ? "dark bg-zinc-900" : "bg-zinc-50"
          }`}
      >
        <div className="max-w-md border-x-2 h-full border-zinc-100 dark:border-zinc-800 mx-auto px-4 sm:px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
