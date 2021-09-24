import React, { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = (e: React.MouseEvent) => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <div css={[curtain, toggle ? curtain_on : null]} onClick={onToggle}></div>
      <div className="sidebar" css={[sidebar, toggle ? sidebar_on : null]}>
        <div className="sidebar__button" onClick={onToggle}>
          버튼
        </div>
      </div>
    </>
  );
};

const curtain = css`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  z-index: -9999;
`;

const curtain_on = css`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  opacity: 0.2;
  background-color: black;
  z-index: 9999;
`;

const sidebar = css`
  position: absolute;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  transition: 0.3s;

  .sidebar {
    &__button {
      color: #ffffff;
      cursor: pointer;
      z-index: 9999;
      width: 70px;
      height: 70px;
      background-color: black;
      position: absolute;
      top: 0;
      left: -70px;
    }
  }
`;

const sidebar_on = css`
  right: 0;
`;

export default SideBar;
