"use client";

import { MenuItems } from "@/types/layout/layoutTypes";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoNavbar from "./LogoNavbar";
import NavbarMenuDekstop from "./NavbarMenuDekstop";
import NavbarMenuMobile from "./NavbarMenuMobile";

const mainMenu: MenuItems[] = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Layanan",
    href: "/services",
  },
  {
    name: "Tentang Kami",
    href: "/about-us",
  },
];

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-10 max-w-screen-xl px-5 xl:px-0 h-auto mx-auto z-[991] flex items-center gap-2">
      <div className="group/nav relative w-full p-px rounded-full backdrop-blur-lg bg-transparent flex items-center transition-all text-default-text hover:shadow-navbarPrimaryShadow duration-500">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,var(--my-primary)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100"></span>
        </span>

        <div className="w-full relative rounded-full bg-default-nav-bg/60 group-hover/nav:bg-default-nav-bg px-3 py-2 lg:px-6 lg:py-5 ring-1 ring-my-dark/10 dark:ring-white/10 flex justify-between items-center">
          <div className="w-[40px] h-[40px] lg:w-[150px]">
            <LogoNavbar />
          </div>

          <div className="flex items-center gap-10">
            <NavbarMenuDekstop menuItems={mainMenu} />

            <div className="flex items-center gap-2">
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="block lg:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer duration-300"
                aria-label="Toggle theme"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                )}
              </motion.button>

              {/* <div className="hidden lg:block">
                <ThemeToggle />
              </div> */}
            </div>
          </div>
        </div>

        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-my-primary/0 via-my-primary/90 to-cyan-400/0 transition-opacity duration-500 group-hover/nav:opacity-40"></span>
      </div>

      {/* <div className="block lg:hidden">
        <ThemeToggle className="w-12 h-12" />
      </div> */}

      <NavbarMenuMobile menuOpen={menuOpen} menuItems={mainMenu} />
    </nav>
  );
};

export default NavbarMain;
