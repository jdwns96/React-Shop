import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Spinner = () => {
  return <div css={spinner}></div>;
};

const spinner = css`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: #000;
  opacity: 0.5;
`;

export default Spinner;
