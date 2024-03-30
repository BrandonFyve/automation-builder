import Sidebar from '@/components/sidebar';
import React from 'react';
import InfoBar from '@/components/infobar';

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
