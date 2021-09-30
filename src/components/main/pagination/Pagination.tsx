import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  currentPage: number;
  totalPage: number;
};

// @pagination Function
const setPagiNation = (currentPage: number, totalPage: number) => {
  let result;
  const tempArray = Array(totalPage < 5 ? totalPage : 5).fill(0);
  if (currentPage < 5 / 2) {
    /* 1, 2 */
    // result = [1, 2, 3, 4, 5];
    result = tempArray.map((_, i) => i + 1);
  } else if (currentPage > totalPage - 5 / 2) {
    /* n-1, n */
    // result = [n-4, n-3 ,n-2 ,n-1, n];
    result = tempArray.map((_, i) => totalPage - i).reverse();
  } else {
    /* else */
    // result = [n-2, n-1 , n ,n+1, n+2];
    result = tempArray.map((_, i) => currentPage + (i - 2));
  }
  return result;
};

const Pagination = (props: Props) => {
  const { currentPage, totalPage } = props;

  const history = useHistory();

  // Handler
  const onLeftClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      history.push(`/main?page=${currentPage - 1}`);
    },
    [history, currentPage],
  );

  const onRightClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      history.push(`/main?page=${currentPage + 1}`);
    },
    [history, currentPage],
  );

  const onPageClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      history.push(`/main?page=${parseInt((e.target as HTMLElement).textContent!)}`);
    },
    [history],
  );

  //@반응형 페이지 네이션
  return (
    <>
      <div className="pagi" css={pagi}>
        <div className="pagi__inner-container">
          <div className="pagi__ball" onClick={onLeftClick}>
            {useMemo(
              () => (
                <FontAwesomeIcon icon={faChevronLeft} />
              ),
              [],
            )}
          </div>
          {setPagiNation(currentPage, totalPage).map((elem, _) => (
            <div className={elem === currentPage ? "pagi__ball pagi__ball--on" : "pagi__ball"} onClick={onPageClick} key={elem}>
              {elem}
            </div>
          ))}
          <div className="pagi__ball" onClick={onRightClick}>
            {useMemo(
              () => (
                <FontAwesomeIcon icon={faChevronRight} />
              ),
              [],
            )}
          </div>
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
      background-color: rgba(209, 250, 229);
      border: 2px solid #000;
      border-radius: 3px;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      overflow-x: auto;
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

      &--on {
        color: #fff;
        background-color: rgb(249, 168, 212);
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
