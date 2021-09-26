import React from "react";

// components
import AppHeader from "@components/headers/AppHeader";
import SideBar from "@components/sidebar/SideBar";
import AppFooter from "@components/footers/AppFooter";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppHeader />
      <SideBar />
      {children}
      <AppFooter />
    </>
  );
};

export default AppLayout;
