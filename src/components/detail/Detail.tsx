import React, { useEffect } from "react";
// React-router
import { useParams } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@modules";
import { detailRequestAction } from "@modules/detail/detail";

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
    <div>
      {console.log(data)}
      <div>상세 페이지</div>
    </div>
  );
};

export default Detail;
