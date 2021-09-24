import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppHeader = () => {
  return (
    <div className="header" css={header}>
      <div className="header__inner-container">
        <div className="header__title">
          <span>OSS</span>
        </div>
      </div>
    </div>
  );
};

const header = css`
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  .header {
    &__inner-container {
      width: 80%;
      position: relative;
    }

    &__title {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      color: #ffffff;
    }
  }
`;

export default AppHeader;
