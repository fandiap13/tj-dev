"use client";

import { MenuItems } from "@/types/layout/layoutTypes";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarMenuMobileProps {
  menuOpen: boolean;
  menuItems: MenuItems[];
}

const NavbarMenuMobile: React.FC<NavbarMenuMobileProps> = ({
  menuOpen,
  menuItems,
}) => {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
      y: 0,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.ul
          // initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }}
          // transition={{ duration: 0.3, ease: "easeInOut" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          // className="flex lg:hidden absolute left-5 right-5 top-[140%] bg-gradient-to-r from-[rgba(124,58,237,0.8)] to-my-primary/20 backdrop-blur-lg backdrop-saturate-150 z-[999] flex-col items-center text-base font-medium p-4 rounded-xl gap-2 border border-white/20 shadow-2xl"
          className="flex lg:hidden absolute left-5 right-5 top-[140%] bg-my-dark/50 backdrop-blur-lg backdrop-saturate-150 z-[999] flex-col items-center text-base font-medium p-4 rounded-xl gap-2 border border-white/20 shadow-2xl"
        >
          {menuItems.map((menu, i) => {
            const active = menu.href === pathname;

            return (
              <motion.li
                key={i}
                variants={itemVariants}
                className={`group text-white text-center lg:text-zinc-300 hover:text-zinc-200 w-full`}
              >
                <Link
                  href={menu.href}
                  className={`inline-block w-full rounded-lg hover:bg-my-info ${
                    active && "bg-my-info"
                  } py-2`}
                >
                  {menu.name}
                  {/* <div
                    className={`${
                      active && "opacity-0"
                    } mx-auto bg-my-primary w-0 group-hover:w-full h-[1px] transition-all duration-500 rounded-full mt-1`}
                  /> */}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default NavbarMenuMobile;
