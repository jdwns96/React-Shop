import React, { useState, useCallback, useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { logoutAction } from "@modules/global/auth";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Card from "./card";

const SideBar = () => {
  // Redux
  const dispatch = useDispatch();

  // state
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    toggle ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
  }, [toggle]);

  // hamberger 토글 버튼
  const onToggle = useCallback((e: React.MouseEvent) => {
    setToggle((prevState) => !prevState);
  }, []);

  // 로그아웃 버튼
  const onLogout = useCallback((e: React.MouseEvent) => {
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <div className={toggle ? "curtain curtain--on" : "curtain"} css={curtain} onClick={onToggle}></div>
      <div className={toggle ? "sidebar sidebar--on" : "sidebar"} css={sidebar}>
        <div className="sidebar__button" onClick={onToggle}>
          HBG
        </div>
        <div className="sidebar__header">
          <div className="sidebar__title">
            <span>MENU</span>
          </div>
          <div className="sidebar__logout-btn" onClick={onLogout}>
            <span>EXIT</span>
          </div>
        </div>
        <div className="sidebar__content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="sidebar__footer">
          <div className="sidebar__total">
            <p>Total</p>
            <p>100$</p>
          </div>
          <div className="sidebar__check-out">CHECK OUT</div>
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
  color: #000;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-right: 2px solid #000;

  &.sidebar--on {
    right: 0;

    @media (max-width: 768px) {
      left: 0;

      .sidebar {
        &__button {
          left: 0px;
        }

        &__title {
          margin-left: 70px;
          overflow: hidden;
        }
      }
    }
  }

  .sidebar {
    &__button {
      cursor: pointer;
      z-index: 9999;
      width: 70px;
      height: 70px;
      border-top: 2px solid #000;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      /* border: 2px solid #000; */
      background-color: rgba(249, 168, 212);
      position: absolute;
      top: 0;
      left: -70px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #fff;
      }
    }

    &__header {
      background-color: rgba(249, 168, 212);
      width: 100%;
      height: 70px;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.75rem 0 0.75rem 0.75rem;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
    }

    &__title {
      flex-grow: 1;
      text-align: center;

      & > span {
        color: #000;
        font-weight: 600;
        margin-right: 3rem;
        cursor: pointer;
      }
    }

    &__logout-btn {
      position: absolute;
      right: 0;
      width: 70px;
      height: 70px;
      background-color: rgba(252, 211, 77);
      border: 2px solid #000;
      border-right: none;
      font-size: 1rem;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #fff;
      }
    }

    &__content {
      height: calc(80% - 70px);
      overflow-y: auto;
      background-color: #fff;
    }

    &__footer {
      position: absolute;
      bottom: 0;
      border-top: 2px solid #000;
      width: 100%;
      height: 20%;
      background-color: rgba(249, 168, 212);
      padding: 1rem;

      display: flex;
      flex-direction: column;
    }

    &__total {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > p:nth-child(1) {
        font-weight: 600;
        font-size: 1.75rem;
      }

      & > p:nth-child(2) {
        font-weight: 600;
        font-size: 1.25rem;
        color: #fff;
      }
    }

    &__check-out {
      flex-grow: 1;
      background-color: rgba(252, 211, 77);
      border-radius: 2px;
      border: 2px solid #000;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.25rem;
      font-weight: 600;
      &:hover {
        color: #fff;
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

    opacity: 0.5;
    background-color: black;
    z-index: 9999;
  }
`;

export default SideBar;
