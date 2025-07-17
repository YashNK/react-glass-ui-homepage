import { createBrowserRouter } from "react-router-dom";
import { Paths } from "../constants/locations";
import { LandingPage } from "../containers/landing-page";
import { ErrorPage } from "../containers/error-page";

export const router = createBrowserRouter([
  {
    path: Paths.LANDING_PAGE,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
]);
