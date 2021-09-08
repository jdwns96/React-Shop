import React from "react";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div>App헤더</div>
      {children}
      <div>App푸터</div>
    </>
  );
};

export default AppLayout;
