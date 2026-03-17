import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AppPage from "./pages/allAppPage/AppPage.jsx";
import InstalledAppPage from "./pages/installedAppPage/InstalledAppPage.jsx";
import NotFoundPage from "./pages/notfoundPage/NotFoundPage.jsx";
import AppDetailsPage from "./pages/appDetailsPage/AppDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json"),
        Component: HomePage,
      },
      {
        path: "apps",
        loader: () => fetch("/apps.json"),
        Component: AppPage,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/apps.json"),
        Component: AppDetailsPage,
      },
      {
        path: "installedApps",
        Component: InstalledAppPage,
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
