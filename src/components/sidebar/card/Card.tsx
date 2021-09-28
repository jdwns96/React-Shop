import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Card = () => {
  return (
    <div className="card" css={card}>
      <div className="card__inner-container">
        <div className="card__del-btn">x</div>
        <div className="card__img">
          <img src="" alt="items" />
        </div>
        <div className="card__body">2</div>
      </div>
    </div>
  );
};

const card = css`
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  .card {
    &__inner-container {
      position: relative;
      background-color: rgba(209, 250, 229);
      border-radius: 5px;
      border: 2px solid black;
      height: 100%;
      padding: 0.5rem;
      display: flex;
    }
    &__del-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      border: 2px solid #000;
      border-radius: 2px;
      width: 20px;
      height: 20px;
      background-color: rgba(252, 211, 77);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    &__img {
      width: 33.33%;
      height: 100%;
      border: 2px solid #000;
      border-radius: 2px;
    }
    &__body {
      flex-grow: 1;
    }
  }
`;

export default Card;
