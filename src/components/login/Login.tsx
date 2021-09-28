import React, { useCallback, useEffect, useState } from "react";

// react-router
import { useHistory } from "react-router";

// Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@modules";
import { loginRequestAction } from "@modules/global/auth";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Login = () => {
  // react-router
  const history = useHistory();

  // Redux
  const store = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  // state
  const [form, setForm] = useState({
    ID: "",
    PW: "",
  });

  // Mount & Update
  useEffect(() => {
    // 로그인 정보가 있는경우 메인으로.
    if (store.data.isLogin === true) {
      history.push("/");
    }
  }, [store.data.isLogin, history]);

  // event handler
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }, []);

  // event handler
  const onLogin = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // action!
      dispatch(loginRequestAction({ id: form.ID, pw: form.PW }));
    },
    [form, dispatch],
  );

  return (
    <>
      <form onSubmit={onLogin}>
        <div className="login" css={login}>
          <div className="login__form">
            <div className="login__title">
              <span>WELCOME!!</span>
            </div>
            <div className="login__id Input__component">
              <label htmlFor="ID">ID</label>
              <input type="text" placeholder="ID" id="ID" name="ID" onChange={onChange} value={form.ID} />
            </div>
            <div className="login__pw Input__component">
              <label htmlFor="PW">PW</label>
              <input type="password" placeholder="PASSWORD" id="PW" name="PW" onChange={onChange} value={form.PW} />
            </div>
            <div className="login__submit">
              <input type="submit" value="LOGIN" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const login = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  .login {
    &__form {
      border: 2px solid #000;
      border-radius: 3px;
      padding: 1rem;
      background-color: rgba(209, 250, 229);

      width: 400px;
    }

    &__title {
      font-size: 2rem;
      padding: 1rem;
      overflow: hidden;

      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }

    &__submit {
      input {
        width: 100%;
        padding: 1rem;
        font-size: 1.5rem;
        border: 2px solid #000;
        background-color: rgba(252, 211, 77);

        &:hover {
          color: white;
        }
      }
    }
  }

  .Input {
    &__component {
      width: 100%;
      border: 2px solid black;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      width: 100%;
      font-size: 1.25rem;
      margin-bottom: 1rem;

      &:focus-within {
        border-color: rgba(252, 211, 77);
      }

      label {
        position: relative;
        background-color: rgba(252, 211, 77);
        padding: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: rgba(252, 211, 77);
          right: -5px;
          transform: rotate(45deg);
          z-index: 1;
        }
      }

      input {
        font-size: 1.25rem;
        letter-spacing: 3px;

        border: 0;
        position: relative;
        flex: 1 1 auto;
        width: 1%;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        /* padding: 0.5rem; */

        &:focus {
          outline: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .login {
      &__form {
        width: 90%;
      }
    }
  }
`;

export default Login;
