"use client";
import { useTheme } from "../providers";

export default function Blogs() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme == "dark" ? "text-zinc-100" : "text-zinc-700"}`}>
      Blogs
    </div>
  );
}
