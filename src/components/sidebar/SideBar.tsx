import React, { useState, useCallback } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback((e: React.MouseEvent) => {
    setToggle((prevState) => !prevState);
  }, []);

  return (
    <>
      <div className="curtain" css={[curtain, toggle ? curtain_on : null]} onClick={onToggle}></div>
      <div className="sidebar" css={[sidebar, toggle ? sidebar_on : null]}>
        <div className="sidebar__button" onClick={onToggle}>
          버튼
        </div>
        <div className="sidebar__header">
          <span>OSS</span>
        </div>
        <div className="sidebar__content">
          <div className="dummy"></div>
          <div className="dummy"></div>
          <div className="dummy"></div>
        </div>
      </div>
    </>
  );
};

const sidebar = css`
  /* position: fixed; */
  position: absolute;
  width: 400px;
  top: 0;
  right: -400px;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  transition: 0.3s;
  color: #fff;

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

    &__header {
      width: 100%;
      height: 70px;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.75rem;
    }

    &__content {
      height: calc(100% - 70px);
      overflow-y: auto;

      & > .dummy {
        width: 100%;
        height: 500px;
        background-color: brown;
        padding: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 100%;
  }
`;

const sidebar_on = css`
  left: unset !important;
  right: 0;
`;

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
  opacity: 0.3;
  background-color: black;
  z-index: 9999;
`;

export default SideBar;
