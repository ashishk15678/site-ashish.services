"use client";
import react, { createContext } from "react";
import { useTheme } from "./providers";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Wrapper({ children }: { children: react.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme == "dark" ? "dark bg-zinc-900" : "bg-zinc-50"
        }`}
      >
        <div className="md:max-w-2xl max-w-md border-x-2 h-full border-zinc-100 dark:border-zinc-800 mx-auto px-4 sm:px-6 py-6">
          <header className="flex justify-between items-center mb-8" id="home">
            <Link href={"/"} prefetch>
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 ring-2 ring-zinc-500 ring-offset-2 dark:ring-offset-black">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/147980956?v=4"
                    alt="Profile"
                  />
                  <AvatarFallback className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    AS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1
                    className={`text-xl font-semibold text-green-500
                `}
                  >
                    Ashish
                  </h1>
                  <p
                    className={`text-sm ${
                      theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-1">
              <Link href={"/blogs"} nonce="blog" prefetch>
                <Button variant={"link"} className="font-bold underline">
                  blogs
                </Button>
              </Link>
              <Link href={"/shelf"} nonce="blog" prefetch>
                <Button variant={"link"} className="font-bold underline">
                  shelf
                </Button>
              </Link>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                className="rounded-full border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:text-white  dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {theme == "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
