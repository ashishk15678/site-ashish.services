"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      Some error occured , not from your but our side , visit{" "}
      <Link href="/" className="underline">
        home page
      </Link>{" "}
      and try again{" "}
    </div>
  );
}
