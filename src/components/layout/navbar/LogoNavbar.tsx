"use client";

import { useTheme } from "@/context/ThemeContext";
import LogoDark from "../logo/LogoDark";
import LogoDarakSm from "../logo/LogoDarkSm";
import LogoLight from "../logo/LogoLight";
import LogoLightSm from "../logo/LogoLightSm";

const LogoNavbar: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <>
      <div className="w-full h-full hidden lg:block">
        {isDarkMode ? <LogoDark /> : <LogoLight />}
      </div>
      <div className="w-full h-full block lg:hidden">
        {isDarkMode ? <LogoDarakSm /> : <LogoLightSm />}
      </div>
    </>
  );
};

export default LogoNavbar;
