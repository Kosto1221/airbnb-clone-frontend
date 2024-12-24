import { createBrowserRouter } from "react-router-dom";
import Root from "./components/ui/root";
import Home from "./components/ui/routes/Home";
import NotFound from "./components/ui/routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ path: "", element: <Home /> }],
  },
]);

export default router;
