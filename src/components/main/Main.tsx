import React, { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@modules";
import { mainRequestAction } from "@modules/main/main";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// child component
import Card from "./card";
import Pagination from "./pagination";

const Main = () => {
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store.main);

  useEffect(() => {
    dispatch(mainRequestAction());
  }, []);

  return (
    <>
      <div className="main" css={main}>
        <div className="main__inner-container">
          {store.items.map((elem: any, i: number) => (
            <Card key={elem.id} data={elem} />
          ))}
        </div>
      </div>
      <Pagination />
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
