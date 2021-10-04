import React from "react";

import image1 from "@assets/images/image1.jpeg";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card" css={card}>
      <div className="card__inner-container">
        <div className="card__del-btn">
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="card__img">
          <img src={image1} alt="items" />
        </div>
        <div className="card__body">
          <p className="card__title">엄준식 에디션</p>
          <p className="card__price">100$</p>
          <div className="card__quantity">
            <div className="text">
              <span>수량</span>
              <span className="count"> 1 </span>
              <span>개</span>
            </div>
            <div className="operate-box">
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          </div>
        </div>
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
      font-size: 1.3rem;
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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
        border-radius: 2px;
      }
    }
    &__body {
      flex-grow: 1;
      padding: 1rem 0 0.5rem 1rem;
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &__price {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      flex-grow: 1;
    }

    &__quantity {
      display: flex;

      & > .text {
        flex-grow: 1;
        font-size: 1.1rem;
        font-weight: 600;
        display: flex;
        align-items: flex-end;

        & > .count {
          color: rgb(252, 211, 77);
          background-color: #000;
          font-size: 1.25rem;
          border-radius: 3px;
          margin: 0 0.5rem;
          width: 30px;
        }
      }

      & > .operate-box {
        display: flex;
        cursor: pointer;

        & > div {
          margin: 0 0.1rem;
          background-color: rgb(252, 211, 77);
          border: 2px solid #000;
          border-radius: 3px;
          padding: 0.25rem;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
`;

export default Card;
