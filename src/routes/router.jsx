import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage/HomePage";
import RecordDetailPage from "../pages/RecordDetailPage/RecordDetailPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/records/:recordId",
        element: <RecordDetailPage />,
      },
    ],
  },
]);

export default router;
