import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AppPage from "./pages/allAppPage/AppPage.jsx";
import NotFoundPage from "./pages/notfoundPage/NotFoundPage.jsx";
import AppDetailsPage from "./pages/appDetailsPage/AppDetailsPage.jsx";
import InstalledAppsPage from "./pages/installedAppPage/InstalledAppsPage.jsx";
import PageLoader from "./component/PageLoader/PageLoader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json"),
        Component: HomePage,
        hydrateFallbackElement: <PageLoader/>
      },
      {
        path: "apps",
        loader: () => fetch("/apps.json"),
        Component: AppPage,
        hydrateFallbackElement: <PageLoader/>
      },
      {
        path: "apps/:id",
        loader: () => fetch("/apps.json"),
        Component: AppDetailsPage,
        hydrateFallbackElement: <PageLoader/>
      },
      {
        path: "installedApps",
        loader: () => fetch("/apps.json"),
        Component: InstalledAppsPage,
        hydrateFallbackElement: <PageLoader/>
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
