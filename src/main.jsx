import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./pages/contact.jsx";
import Projects from "./pages/projects.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
