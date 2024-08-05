import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminAmc from "./components/adminAmc";
import AdminService from "./components/adminService";
import Root from "./components/root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/adminService",
          element: <AdminService />,
        },
        {
          path: "/adminAmc",
          element: <AdminAmc />,
        },
      ],
    },
  ]);
  return (
    <main className="w-auto h-auto">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
