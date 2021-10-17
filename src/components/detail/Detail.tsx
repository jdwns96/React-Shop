import React, { useEffect } from "react";
// React-router
import { useParams } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@modules";
import { detailRequestAction } from "@modules/detail/detail";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const dispatch = useDispatch();
  const {
    data,
  }: {
    data: {
      describe: string;
      id: number;
      img: string;
      price: number;
      title: string;
    };
  } = useSelector((store: RootState) => store.detail);
  const params: { id: string } = useParams(); // Get dynamic route value

  // MOUNT
  useEffect(() => {
    const id = parseInt(params.id);
    dispatch(detailRequestAction(id));
  }, []);

  return (
    <>
      {console.log(data)}
      <div className="detail" css={detail}>
        <div className="detail__inner-container">
          <div className="card">
            <div className="card__left-container">
              <div className="card__image">
                <img src={data.img} alt="" />
              </div>
            </div>
            <div className="card__right-container">
              <div className="card__header">
                <div className="card__title">
                  <h1>{data.title}</h1>
                </div>
                <div className="card__price">{data.price}$</div>
              </div>
              <div className="card__body">
                <div className="box card__unti">
                  <div>판매 단위</div>
                  <div>1장</div>
                </div>
                <div className="box card__delivery">
                  <div>배송 구분</div>
                  <div>택배 배송</div>
                </div>
                <div className="box card__describe">
                  <div>제품 설명</div>
                  <div>{data.describe}</div>
                </div>
                <div className="box card__count">
                  <div>구매 수량</div>
                  <p> 0 개 </p>
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
              <div className="card__footer">
                <div>
                  <span>총 상품금액 </span>
                  <span>0</span>
                  <span>$</span>
                </div>
                <div>
                  <button>장바구니 담기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const detail = css`
  padding: 2rem 0;
  /* padding-bottom: 0rem; */
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;

  .detail {
    &__inner-container {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .card {
    display: flex;
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 1rem;
    background-color: rgba(209, 250, 229);

    &__left-container {
      width: 50%;
    }

    &__image {
      /* padding: 0 1.5rem; */

      img {
        border: 2px solid #000;
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
        border-radius: 2px;
      }
    }

    &__right-container {
      width: 50%;
      padding: 0 2rem;
    }

    &__explanation {
    }

    &__title {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    &__price {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    & .box {
      display: flex;
      margin: 0rem 0rem 1rem 0rem;
      padding: 0.5rem 0;
      font-size: 1.2rem;
      border-bottom: 1px solid rgba(249, 168, 212);

      & > div:nth-of-type(1) {
        font-weight: 600;
        flex-basis: 30%;
      }

      & > div:nth-of-type(2) {
        flex-grow: 1;
        font-size: 1.1rem;
      }
    }

    .operate-box {
      display: flex;
      cursor: pointer;
      justify-content: flex-end;

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
`;

export default Detail;
