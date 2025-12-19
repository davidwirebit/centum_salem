'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideComponents = ["/clasica", "/business", "/business/form"]

  if (hideComponents.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 