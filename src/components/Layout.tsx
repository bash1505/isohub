
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WordPressIntegration from './WordPressIntegration';
import WordPressHeader from './WordPressHeader';

const Layout = () => {
  // Check if we're running in an iframe (embedded in WordPress)
  const isEmbedded = window.self !== window.top;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/30">
      <WordPressIntegration />
      {isEmbedded && <WordPressHeader />}
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
