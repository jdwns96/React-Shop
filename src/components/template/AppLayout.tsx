import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div css={testCss}>App헤더</div>
      {children}
      <div>App푸터</div>
    </>
  );
};

const testCss = css`
  background-color: black;
`;

export default AppLayout;
