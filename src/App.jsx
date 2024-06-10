import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import QueryProvider from "./query/QueryProvider";
import store from "./redux/store/store";
import router from "./routes/router";

const persistor = persistStore(store);

export default function App() {
  return (
    <QueryProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </QueryProvider>
  );
}
