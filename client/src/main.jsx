import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RegisterLayout from "./pages/layouts/RegisterLayout";
import DashBoard from "./pages/dashboard/DashBoard";
import SignInForm from "./pages/auth/SignInForm";
import ResendPasswordForm from "./pages/auth/ResendPasswordForm";
import CreateDocuments from "./pages/docpage/CreateDocuments";
import CampusFolders from "./pages/docpage/CampusFolders";
import CampusDocuments from "./pages/docpage/CampusDocuments";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WriteDocument from "./pages/docpage/WriteDocument";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <WriteDocument />,
      },
      {
        path: "/documents",
        element: <CampusFolders />,
      },
      {
        path: "/all-documents/:campusName",
        element: <CampusDocuments />,
      },
      {
        path: "/create-documents/:campusName",
        element: <CreateDocuments />,
      },
      {
        path: "/create-documents/:campusName/write-document",
        element: <WriteDocument />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <RegisterLayout>
        <SignInForm />
      </RegisterLayout>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <RegisterLayout>
        <ResendPasswordForm />
      </RegisterLayout>
    ),
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
