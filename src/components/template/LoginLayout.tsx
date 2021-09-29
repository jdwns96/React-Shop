import { useEffect } from "react";
import { Redirect } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@modules";
import { authRequestAction } from "@modules/global/auth";

// components
import LoginHeader from "@components/headers/LoginHeader";
import LoginFooter from "@components/footers/LoginFooter";
import Spinner from "@components/common/Spinner";

const LoginLayout = ({ children }: { children: JSX.Element }) => {
  // Redux
  const { isVerification, data } = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  // MOUNT
  useEffect(() => {
    if (isVerification === false) {
      // 검증을 받아야한다.
      dispatch(authRequestAction());
    }
  }, []);

  // 처음 렌더링은 검증을 받기 전이기 때문에 스피너 처리
  if (!isVerification) {
    return <Spinner />;
  }

  return (
    <>
      {!data.isLogin === true ? (
        <>
          <LoginHeader />
          {children}
          <LoginFooter />
        </>
      ) : (
        //  로그인 상태라면 "login page" 에 접근할수 없도록 리다이렉트 한다.
        <Redirect from="*" to="/" />
      )}
    </>
  );
};

export default LoginLayout;
