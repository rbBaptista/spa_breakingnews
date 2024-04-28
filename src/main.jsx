import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Search from "./pages/Search/Search.jsx";
import GlobalStyled from "./GlobalStyled.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import { UserProvider } from "./context/UserContext";
import Profile from "./pages/Profile/Profile.jsx";
import CreatNews from "./pages/CreatNews/CreatNew.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/news",
        element: <CreatNews />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
