import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavlinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Navlink({ href, children }: NavlinkProps) {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;
  return (
    <Link
      href={href}
      className={`${
        isActive(href)
          ? "bg-coloryellow rounded-sm hover:transition hover:duration-500  p-2"
          : "hover:bg-coloryellow hover:rounded-sm hover:transition hover:duration-500  p-2"
      } `}
    >
      {children}
    </Link>
  );
}
