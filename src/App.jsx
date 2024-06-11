import { useQuery } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import api from "./api/api";
import ToastContextProvider from "./context/toast.context";
import store from "./redux/store/store";
import router from "./routes/router";
import useLoginStore from "./zustand/login.store";

const persistor = persistStore(store);

export default function App() {
  const accessToken = JSON.parse(localStorage.getItem("token"));
  const setUser = useLoginStore((state) => state.setUser);
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["user", { token: accessToken }],
    queryFn: () => {
      return api.auth.getUserInfo(accessToken);
    },
  });

  if (isSuccess) {
    setUser(data.data);
  }

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center text-9xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <ToastContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ToastContextProvider>
  );
}
