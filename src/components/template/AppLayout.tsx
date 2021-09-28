import { useEffect } from "react";
import { Redirect } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { authRequestAction } from "@modules/global/auth";
import type { RootState } from "@modules";

// components
import AppHeader from "@components/headers/AppHeader";
import SideBar from "@components/sidebar/SideBar";
import AppFooter from "@components/footers/AppFooter";
import Spinner from "@components/common/Spinner";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  // Redux
  const store = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
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
      {store.data.isLogin === true ? (
        <>
          <AppHeader />
          <SideBar />
          {children}
          <AppFooter />
        </>
      ) : (
        <Redirect from="*" to="/login" />
      )}
    </>
  );
};

export default AppLayout;
