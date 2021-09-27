import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppHeader = () => {
  return (
    <div className="header" css={header}>
      <div className="header__inner-container">
        <div className="header__title">
          <span>GOOLONGE</span>
        </div>
      </div>
    </div>
  );
};

const header = css`
  background-color: rgba(252, 211, 77);
  border: 2px solid #000;
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
      font-size: 2.5rem;
      color: #000;
      font-weight: 600;

      span {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      &__inner-container {
        width: 100%;
      }
    }
  }
`;

export default AppHeader;
