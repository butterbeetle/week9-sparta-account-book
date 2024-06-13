import { RouterProvider } from "react-router-dom";
import ToastContextProvider from "./context/toast.context";
import QueryProvider from "./query/QueryProvider";
import router from "./routes/router";

export default function App() {
  return (
    <QueryProvider>
      <ToastContextProvider>
        <RouterProvider router={router} />
      </ToastContextProvider>
    </QueryProvider>
  );
}
