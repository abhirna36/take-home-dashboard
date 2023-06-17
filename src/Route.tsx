import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateTestnet from "./pages/createTestnet";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateTestnet />,
  },
]);

export default Router;
