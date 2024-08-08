import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminService from "./components/adminService";
import Root from "./components/root";
import EditService from "./components/editService";

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
          path: "/editservice/:id",
          element: <EditService />,
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
