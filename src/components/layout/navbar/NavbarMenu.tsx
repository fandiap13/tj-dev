"use client";

import Link from "next/link";

const mainMenu = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/",
  },
  {
    name: "Layanan",
    href: "/",
  },
  {
    name: "Tentang Kami",
    href: "/",
  },
];

const NavbarMenu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-4 text-lg font-medium">
      {mainMenu.map((menu, i) => (
        <li key={i} className="group text-zinc-300 hover:text-zinc-200">
          <Link href={menu.href}>{menu.name}</Link>
          <div className="mx-auto bg-my-primary w-0 group-hover:w-full h-[1px] transition-all duration-500 rounded-full mt-1" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
