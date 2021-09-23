import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div css={test__header}>App헤더</div>
      {children}
      <div css={test__footer}>App푸터</div>
    </>
  );
};

const test__header = css`
  background-color: orange;
`;

const test__footer = css`
  background-color: orange;
`;

export default AppLayout;
