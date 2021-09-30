import React, { useEffect } from "react";

// react-router
import { useLocation, Redirect } from "react-router";

//Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@modules";
import { mainRequestAction } from "@modules/main/main";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// child component
import Card from "./card";
import Pagination from "./pagination";

type GetElementType<T extends any[]> = T extends (infer R)[] ? R : never;

// @queryString function
const queryString = (qs: string): number => {
  let response;
  const val = qs.replace("?", "");
  const arr = val.split("=");
  const temp = parseInt(arr[arr.indexOf("page") + 1]);
  isNaN(temp) ? (response = 1) : (response = temp); // NaN 일 경우 "/" 으로 보낸다.

  return response;
};

// JSX
const Main = () => {
  // Redux
  const dispatch = useDispatch();
  const { items, currentPage, totalPage } = useSelector((store: RootState) => store.main);

  // router
  const location = useLocation(); // location hooks

  // external function - queryString
  const page = queryString(location.search);

  // UPDATE
  // 쿼리스트링의 값이 변할때 마다 dispatch하여 서버에서 데이터를 가져온다.
  useEffect(() => {
    dispatch(mainRequestAction(page));
  }, [dispatch, page]);

  return (
    <>
      {page <= 0 && <Redirect from="*" to="/" />}
      {currentPage > totalPage && <Redirect from="*" to="/" />}
      <div className="main" css={main}>
        <div className="main__inner-container">
          {items.map((elem: GetElementType<RootState["main"]["items"]>, i: number) => (
            <Card key={elem.id} data={elem} />
          ))}
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPage={totalPage} />
    </>
  );
};

const main = css`
  padding: 2rem 0;
  /* padding-bottom: 0rem; */
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
