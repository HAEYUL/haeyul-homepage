import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Haeyul from "../pages/haeyul/page";
import Gondre from "../pages/gondre/page";
import Chueotang from "../pages/chueotang/page";
import Signup from "../pages/signup/page";
import Login from "../pages/login/page";
import Admin from "../pages/admin/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/haeyul",
    element: <Haeyul />,
  },
  {
    path: "/gondre",
    element: <Gondre />,
  },
  {
    path: "/chueotang",
    element: <Chueotang />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
