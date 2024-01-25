import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JobList from "./Components/JobList.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <JobList />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
