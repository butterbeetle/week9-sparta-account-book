import { RouterProvider } from "react-router-dom";
import ToastContextProvider from "./context/toast.context";
import QueryProvider from "./query/QueryProvider";
import router from "./routes/router";

// const persistor = persistStore(store);

//TODO 프로필 이미지 처리
//TODO accessToken 로그아웃...?
//TODO 로그인 정보 zustand...?
export default function App() {
  return (
    <QueryProvider>
      <ToastContextProvider>
        <RouterProvider router={router} />
      </ToastContextProvider>
    </QueryProvider>
  );
}
