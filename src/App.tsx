import { Suspense } from "react";
import Spinner from "./components/Spinner/Spinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
function App() {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Spinner />}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
