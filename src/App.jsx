import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import ToastContextProvider from "./context/toast.context";
import QueryProvider from "./query/QueryProvider";
import store from "./redux/store/store";
import router from "./routes/router";

const persistor = persistStore(store);
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
