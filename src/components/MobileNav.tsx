import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
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
        <p className="text-[26px] text-white font-extrabold max-sm:hidden">
          Meetra
        </p>
      </Link>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
