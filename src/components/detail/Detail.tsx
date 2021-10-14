import React, { useEffect } from "react";
// React-router
import { useParams } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@modules";
import { detailRequestAction } from "@modules/detail/detail";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Detail = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store: RootState) => store.detail);
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
          <div>왼쪽</div>
          <div>오른쪽</div>
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
`;

export default Detail;
