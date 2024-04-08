import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import  Error404  from "../components/pages/Error404";
import { Home } from "../components/pages/Home";
import { Areas } from "../components/pages/Areas";
import { Login } from "../components/pages/Login";
import { Perfil } from "../components/pages/Perfil";
import { PDF } from "../components/pages/PDF";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/areas",
        element: <Areas />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/generarpdf",
        element: <PDF />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;
