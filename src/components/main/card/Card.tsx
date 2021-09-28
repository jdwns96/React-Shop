import React, { useCallback } from "react";

import { useHistory } from "react-router";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import image from "@assets/images/image1.jpeg";
import image2 from "@assets/images/image2.jpeg";

type Props = {
  key: number;
  data: {
    id: number;
    title: string;
    price: string;
    img: string;
    describe: string;
  };
};

const Card = (props: any) => {
  // props
  const { id, title, price, img, describe } = props.data;

  // router
  const history = useHistory();

  const onClickItem = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      history.push("/detail");
    },
    [history],
  );

  const onClickBtn = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="card" css={card} onClick={onClickItem}>
      <div className="card__inner-container">
        <div className="card__img">
          <img src={img} alt="closet" />
        </div>
        <p className="card__title">{title}</p>
        <p className="card__price">{price}</p>
        <div className="card__button" onClick={onClickBtn}>
          <button>BUY</button>
        </div>
      </div>
    </div>
  );
};

const card = css`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  .card {
    &__inner-container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      border: 2px solid black;
      border-radius: 5px;
      padding: 0.3rem;
      background-color: rgba(209, 250, 229);
    }

    &__title {
      font-size: 1rem;
      text-align: center;
      padding: 1rem 0;

      /* background-color: rgba(4, 120, 87); */
    }

    &__img {
      flex-grow: 1;
      border: 2px solid #000;
      border-radius: 3px;
      background-color: #000;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
        border-radius: 2px;
      }
    }

    &__price {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 600;
      padding: 1rem 0;
    }

    &__button {
      button {
        /* transition: 0.2s; */
        border: 2px solid black;
        border-radius: 3px;
        font-size: 1.5rem;
        padding: 0.5rem;
        width: 100%;
        cursor: pointer;
        background-color: rgba(252, 211, 77);

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    width: 33.33%;
  }

  @media (max-width: 640px) {
    width: 50%;
  }
`;

export default Card;
