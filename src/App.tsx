import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./style.scss";
import "./assets/color.scss";
import "./assets/constants.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
