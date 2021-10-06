import { useEffect } from "react";
import { Redirect } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@modules";
import { authRequestAction } from "@modules/global/auth";

// components
import AppHeader from "@components/headers/AppHeader";
import SideBar from "@components/sidebar/SideBar";
import AppFooter from "@components/footers/AppFooter";
import Spinner from "@components/common/Spinner";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  // Redux
  const { isVerification, data } = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  // MOUNT -- login check
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
      {data.isLogin === true ? (
        <>
          <AppHeader />
          <SideBar />
          {children}
          <AppFooter />
        </>
      ) : (
        // 로그인 상태가 아니라면 "login page" 로 리다이렉트 한다.
        <Redirect from="*" to="/login" />
      )}
    </>
  );
};

export default AppLayout;
