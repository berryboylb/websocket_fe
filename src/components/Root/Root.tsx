import React, { Suspense } from "react";
import ChatProvider from "../../Context/ChatProvider";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Suspense>
      <ChatProvider>
        <Outlet />
      </ChatProvider>
    </Suspense>
  );
};

export default Root;
