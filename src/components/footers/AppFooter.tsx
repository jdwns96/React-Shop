import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AppFooter = () => {
  //@반응형 페이지 네이션
  return (
    <>
      <div className="footer" css={footer}>
        <div className="footer__inner-container">
          <div className=" pagination">
            <div className="pagination__ball">{"<"}</div>
            <div className="pagination__ball">{"1"}</div>
            <div className="pagination__ball">{"2"}</div>
            <div className="pagination__ball">{"3"}</div>
            <div className="pagination__ball">{"4"}</div>
            <div className="pagination__ball">{"5"}</div>
            <div className="pagination__ball">{"..."}</div>
            <div className="pagination__ball">{">"}</div>
          </div>
        </div>
        <div className="footer__text">made by GLE</div>
      </div>
    </>
  );
};

const footer = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 70px;

  .footer {
    &__inner-container {
      position: fixed;
      height: 70px;
      bottom: 0;
      /* background-color: rgba(252, 211, 77); */
      /* background-color: rgba(52, 211, 153); */
      /* background-color: rgba(139, 92, 246); */
      /* background-color: rgba(249, 168, 212); */
      /* background-color: rgba(4,120,87); */
      background-color: rgba(209, 250, 229);
      z-index: 999;
      border: 2px solid #000;
      border-radius: 3px;
      width: 60%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;

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
    .footer {
      &__inner-container {
        width: 100%;
      }
    }
  }
`;

export default AppFooter;
