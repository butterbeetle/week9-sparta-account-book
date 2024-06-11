import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import DefaultLayout from "../layouts/DefaultLayout";
import { defaultLayoutLoader } from "../layouts/DefaultLayout.loader";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyPage from "../pages/MyPage/MyPage";
import RecordDetailPage from "../pages/RecordDetailPage/RecordDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    loader: defaultLayoutLoader,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/my",
            element: <MyPage />,
          },
          {
            path: "/records/:recordId",
            element: <RecordDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
