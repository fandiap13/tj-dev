"use client";

import { ReactNode, useEffect, useState } from "react";

interface LoadingPageProps {
  children: ReactNode;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ children }) => {
  const [isClientPage, setIsClientPage] = useState(false);
  useEffect(() => {
    setIsClientPage(true);
  }, []);

  if (!isClientPage) {
    return null;
  }

  return children;
};

export default LoadingPage;
