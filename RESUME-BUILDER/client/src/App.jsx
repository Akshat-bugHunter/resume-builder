
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";

import api from "./configs/api";
import { setLoading, login } from "./app/features/authSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "builder/:resumeId",
        element: <ResumeBuilder />,
      },
      {
        path: "view/:id",
        element: <Preview />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");

      try {
        if (token) {
          const { data } = await api.get("/api/auth/data", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (data.user) {
            dispatch(login({ token, user: data.user }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch user:", error.message);
      } finally {
        dispatch(setLoading(false));
      }
    };

    getUserData();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
