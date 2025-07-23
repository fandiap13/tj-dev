"use client";

import { MenuItems } from "@/types/layout/layoutTypes";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarMenuDekstopProps {
  menuItems: MenuItems[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // jeda antar item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const NavbarMenuDekstop: React.FC<NavbarMenuDekstopProps> = ({ menuItems }) => {
  const pathname = usePathname();
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex bg-transparent relative flex-row items-center gap-4 text-lg font-medium"
    >
      {menuItems.map((menu, i) => {
        const active = menu.href === pathname;

        return (
          <motion.li
            key={i}
            variants={itemVariants}
            className={`group ${
              active ? "text-my-primary" : "text-white lg:text-zinc-300"
            } hover:text-zinc-200`}
          >
            <Link href={menu.href}>{menu.name}</Link>
            <div
              className={`mx-auto bg-my-primary ${
                active ? "w-full" : "w-0"
              } group-hover:w-full h-[1px] transition-all duration-500 rounded-full mt-1`}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default NavbarMenuDekstop;
