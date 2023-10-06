import { RouteObject } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { HomePage, ChatsPage } from "./pages";

const routes: RouteObject[] = [
  {
    element: <HomePage />,
    index: true,
    errorElement: <NotFound />,
  },
  {
    path: "/chats",
    element: <ChatsPage/>,
    errorElement: <NotFound />,
  },
];

export default routes;
