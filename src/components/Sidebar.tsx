"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 max-h-screen w-fit flex flex-col justify-between p-6 pt-20 max-sm:hidden bg-dark-2">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.url || pathname.startsWith(`${link.url}/`);
          return (
            <Link
              key={link.title}
              href={link.url}
              className={cn("flex gap-4 p-2 justify-start rounded-lg", {
                "bg-dark-3": isActive,
              })}
            >
              <Image
              src={link.icon}
              alt={link.title}
              width={24}
              height={24}
              />
              <p className="font-semibold text-lg max-lg:hidden">
                {link.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
