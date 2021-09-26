import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// child component
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className="main" css={main}>
        <div className="main__inner-container">
          {Array(8)
            .fill(0)
            .map((elem, i) => (
              <Card number={i} />
            ))}
        </div>
      </div>
    </>
  );
};

const main = css`
  padding: 2rem 0;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;

  .main {
    &__inner-container {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    .main {
      &__inner-container {
        width: 95%;
      }
    }
  }
`;

export default Main;
