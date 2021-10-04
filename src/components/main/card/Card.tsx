import React, { useCallback, useMemo } from "react";

import { useHistory } from "react-router";

// redux
import { useDispatch } from "react-redux";
import { selCartAction } from "@modules/global/cart";
import type { RootState } from "@modules";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type GetElementType<T extends any[]> = T extends (infer U)[] ? U : never;

type Props = {
  key: number;
  data: GetElementType<RootState["main"]["items"]>;
};

const Card = (props: Props) => {
  // props
  const { id, title, price, img, describe } = props.data;

  // redux
  const dispatch = useDispatch();

  // router
  const history = useHistory();

  const onClickItem = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      history.push(`/detail/${id}`);
    },
    [history, id],
  );

  const onCartClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(
      selCartAction({
        id: id,
        title: title,
        price: price,
        img: img,
        describe: describe,
      }),
    );
  }, []);

  return (
    <div className="card" css={card} onClick={onClickItem}>
      <div className="card__inner-container">
        <div className="card__img">
          <img src={img} alt="closet" />
        </div>
        <p className="card__title">{title}</p>
        <p className="card__price">{price}</p>
        <div className="card__button">
          <button className="card__detail-btn" onClick={onClickItem}>
            {useMemo(
              () => (
                <FontAwesomeIcon icon={faSearch} />
              ),
              [],
            )}
          </button>
          <button className="card__cart-btn" onClick={onCartClick}>
            {useMemo(
              () => (
                <FontAwesomeIcon icon={faShoppingCart} />
              ),
              [],
            )}
          </button>
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
      display: flex;
      justify-content: space-around;
      button {
        /* transition: 0.2s; */
        border: 2px solid black;
        border-radius: 3px;
        font-size: 2rem;
        padding: 0.5rem;
        width: 48%;
        cursor: pointer;
        background-color: rgba(252, 211, 77);
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          color: #fff;
        }
      }
    }

    &__cart-btn {
      background-color: rgba(249, 168, 212) !important;
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
