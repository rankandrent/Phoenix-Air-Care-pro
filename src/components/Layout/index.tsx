import React from 'react';
import Navbar from './Navbar';
import FooterSection from './Footer/FooterSection';
import Head from '../SEO/Head';
import Breadcrumbs from '../navigation/Breadcrumbs';
import ExitPopup from '../ExitPopup';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-grow">{children}</main>
        <FooterSection />
      </div>
      <ExitPopup />
    </>
  );
};

export default Layout;