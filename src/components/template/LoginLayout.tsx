import { useEffect } from "react";
import { Redirect } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { authRequestAction } from "@modules/global/auth";
import type { RootState } from "@modules";

// components
import LoginHeader from "@components/headers/LoginHeader";
import LoginFooter from "@components/footers/LoginFooter";
import Spinner from "@components/common/Spinner";

const LoginLayout = ({ children }: { children: JSX.Element }) => {
  // Redux
  const store = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("LOGIN LAYOUT HOOKS");
    if (store.isVerification === false) {
      // 검증을 받아야한다.
      dispatch(authRequestAction());
    }
  }, []);

  if (!store.isVerification) {
    return <Spinner />;
  }

  return (
    <>
      {!store.data.isLogin === true ? (
        <>
          <LoginHeader />
          {children}
          <LoginFooter />
        </>
      ) : (
        <Redirect from="*" to="/" />
      )}
    </>
  );
};

export default LoginLayout;
