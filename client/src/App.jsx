import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import pages */
import Home from "./pages/Home";
/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
