import React, { useState, useCallback, useEffect } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    toggle ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
  }, [toggle]);

  const onToggle = useCallback((e: React.MouseEvent) => {
    setToggle((prevState) => !prevState);
  }, []);

  return (
    <>
      <div className={toggle ? "curtain curtain--on" : "curtain"} css={curtain} onClick={onToggle}></div>
      <div className={toggle ? "sidebar sidebar--on" : "sidebar"} css={sidebar}>
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
  position: fixed;
  width: 400px;
  top: 0;
  right: -400px;
  height: 100vh;
  z-index: 9999;
  transition: 0.3s;
  color: #fff;

  &.sidebar--on {
    right: 0;

    @media (max-width: 768px) {
      left: 0;

      .sidebar {
        &__button {
          left: 0px;
        }
      }
    }
  }

  .sidebar {
    &__button {
      color: #000;
      cursor: pointer;
      z-index: 9999;
      width: 70px;
      height: 70px;
      /* background-color: #000; */
      border-top: 2px solid black;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
      background-color: rgba(249, 168, 212);
      position: absolute;
      top: 0;
      left: -70px;
    }

    &__header {
      background-color: rgba(249, 168, 212);
      border-top: 2px solid black;
      border-right: 2px solid black;
      border-bottom: 2px solid black;
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
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      border-right: 2px solid #000;

      & > .dummy {
        width: 100%;
        height: 500px;
        background-color: rgba(209, 250, 229);
        padding: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 100%;
  }
`;

const curtain = css`
  position: fixed;
  width: 0;
  height: 0;
  top: 0;
  opacity: 0;
  z-index: -9999;

  &.curtain--on {
    width: 100vw;
    height: 100vh;

    opacity: 0.3;
    background-color: black;
    z-index: 9999;
  }
`;

export default SideBar;
