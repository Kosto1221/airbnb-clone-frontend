import { createBrowserRouter } from "react-router-dom";
import Root from "./components/ui/root";
import Home from "./components/ui/routes/Home";
import Users from "./components/ui/routes/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "users", element: <Users /> },
    ],
  },
]);

export default router;
