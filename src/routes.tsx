import { RouteObject } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { HomePage, ChatsPage } from "./pages";
import Root from "./components/Root/Root"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { element: <HomePage />, index: true },
      {
        path: "chats",
        element: <ChatsPage />,
        errorElement: <NotFound />,
      },
    ],
  },
];

export default routes;
