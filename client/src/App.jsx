import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Gallery from "./components/gallery";
import Service from "./components/service";
import Amc from "./components/amc";
import Contact from "./components/contact";
import Register from "./components/register";
import Root from "./components/root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/amc",
          element: <Amc />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
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
