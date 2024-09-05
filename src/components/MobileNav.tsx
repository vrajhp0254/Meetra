"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="">
      <Sheet>
        <SheetTrigger>
            <Image src="/icons/hamburger.svg" width={36} height={36} alt="Menu" className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-2">
        <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Meetra Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] text-white font-extrabold">
          Meetra
        </p>
      </Link>

      <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
        <SheetClose asChild>
          <section className="flex flex-col text-white h-full gap-6 pt-16 ">
          {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.url ;
          return (
            <SheetClose asChild key={link.title}>
            <Link
              key={link.title}
              href={link.url}
              className={cn("flex gap-4 p-2 w-full max-w-60 rounded-lg", {
                "bg-dark-3": isActive,
              })}
            >
              <Image
              src={link.icon}
              alt={link.title}
              width={20}
              height={20}
              />
              <p className="font-semibold  ">
                {link.title}
              </p>
            </Link>
            </SheetClose>
          );
        })}
          </section>
        </SheetClose>
      </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
