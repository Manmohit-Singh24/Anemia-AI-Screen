import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";
import App from "./App.jsx";
import Layout from "./pages/Layout.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import SystemDesign from "./pages/SystemDesign.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/auth",
                element: <AuthPage />,
                children: [
                    {
                        path: "auth/:page",
                        element: <AuthPage />,
                    },
                ],
            },
            {
                path: "/",
                element: <Layout />,
                children: [
                    {
                        path: "/:page",
                        element: <Layout />,
                    },
                ],
            },
        ],
    },
    {
        path: "/system-design",
        element: <SystemDesign />,
        children: [
            {
                path: "/system-design/:page",
                element: <SystemDesign />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);
