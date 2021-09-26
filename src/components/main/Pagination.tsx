import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Pagination = () => {
  //@반응형 페이지 네이션
  return (
    <>
      <div className="pagi" css={pagi}>
        <div className="pagi__inner-container">
          <div className="pagi__ball">{"<"}</div>
          <div className="pagi__ball">{"1"}</div>
          <div className="pagi__ball">{"2"}</div>
          <div className="pagi__ball">{"3"}</div>
          <div className="pagi__ball">{"4"}</div>
          <div className="pagi__ball">{"5"}</div>
          <div className="pagi__ball">{"..."}</div>
          <div className="pagi__ball">{">"}</div>
        </div>
      </div>
    </>
  );
};

const pagi = css`
  position: relative;
  position: sticky;
  bottom: 0;

  width: 100%;
  display: flex;
  justify-content: center;
  height: 70px;

  .pagi {
    &__inner-container {
      width: 60%;
      height: 70px;

      /* position: sticky;
      bottom: 0; */
      /* background-color: rgba(252, 211, 77); */
      /* background-color: rgba(52, 211, 153); */
      /* background-color: rgba(139, 92, 246); */
      /* background-color: rgba(249, 168, 212); */
      /* background-color: rgba(4,120,87); */
      background-color: rgba(209, 250, 229);
      border: 2px solid #000;
      border-radius: 3px;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    &__ball {
      width: 50px;
      height: 50px;
      margin: 0 0.1rem;
      font-size: 1.5rem;
      font-weight: 600;
      background-color: rgba(252, 211, 77);
      color: #000;
      border: 2px solid black;
      border-radius: 3px;
      cursor: pointer;

      display: flex;
      justify-content: space-around;
      align-items: center;

      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    .pagi {
      &__inner-container {
        width: 100%;
      }
    }
  }
`;

export default Pagination;
