import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className=" fixed flex justify-between z-50 w-full bg-dark-2 px-6 py-4 lg:px-10">
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
      <MobileNav/>
    </div>
  );
};

export default Navbar;
