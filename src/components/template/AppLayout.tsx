import React from "react";

// components
import AppHeader from "@components/headers/AppHeader";
import SideBar from "@components/sidebar/SideBar";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppHeader />
      <SideBar />
      {children}
      <div css={test__footer}>App푸터</div>
    </>
  );
};

const test__footer = css`
  background-color: orange;
`;

export default AppLayout;
