import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SkillsPage from "./pages/js/SkillsPage.jsx";
import ProjectDetails from "./pages/js/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
