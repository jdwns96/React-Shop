import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Login = () => {
  return (
    <form>
      <div className="login" css={login}>
        <div className="login__form">
          <div className="login__title">GLE</div>
          <div className="login__id Input__component">
            <label htmlFor="ID">ID</label>
            <input type="text" placeholder="ID" id="ID" />
          </div>
          <div className="login__pw Input__component">
            <label htmlFor="PW">PW</label>
            <input type="password" placeholder="PASSWORD" id="PW" />
          </div>
          <div className="login__submit">
            <input type="submit" value="LOGIN" />
          </div>
        </div>
      </div>
    </form>
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
    }

    &__title {
      font-size: 2rem;
      padding: 1rem;
    }

    &__submit {
      input {
        width: 100%;
        padding: 0.5rem;
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
        padding: 0.5rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      input {
        font-size: 1.25rem;
        letter-spacing: 3px;

        border: 0;
        position: relative;
        flex: 1 1 auto;
        width: 1%;
        /* padding: 0.5rem 0.5rem 0.5rem 0; */
        padding: 0.5rem;

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
