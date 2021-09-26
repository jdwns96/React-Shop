import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppFooter = () => {
  return (
    <>
      <div className="footer" css={footer}>
        <div className="footer__inner-container">made by GLE</div>
      </div>
    </>
  );
};

const footer = css`
  padding-top: 2rem;

  .footer {
    &__inner-container {
      /* border-top: 2px solid black;
      border-bottom: 2px solid black; */
    }
  }
`;

export default AppFooter;
