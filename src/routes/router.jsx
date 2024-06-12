import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage/HomePage";
import homePageLoader from "../pages/HomePage/HomePage.loader";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyPage from "../pages/MyPage/MyPage";
import RecordDetailPage from "../pages/RecordDetailPage/RecordDetailPage";
import RecordDetailPageLoader from "../pages/RecordDetailPage/RecordDetailPage.loader";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/signup",
            element: <SignUpPage />,
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/",
            element: <HomePage />,
            loader: homePageLoader,
          },
          {
            path: "/my",
            element: <MyPage />,
          },
          {
            path: "/records/:recordId",
            element: <RecordDetailPage />,
            loader: RecordDetailPageLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
