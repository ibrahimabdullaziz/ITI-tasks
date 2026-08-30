import { createBrowserRouter } from "react-router-dom";
import { countriesQueryOptions, countryQueryOptions } from "./api/countries.js";
import { queryClient } from "./lib/queryClient.js";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RouteError from "./pages/RouteError.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => queryClient.ensureQueryData(countriesQueryOptions),
      },
      {
        path: "country/:code",
        element: <CountryDetailsPage />,
        loader: ({ params }) =>
          queryClient.ensureQueryData(countryQueryOptions(params.code)),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
