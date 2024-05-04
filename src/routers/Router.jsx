import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Details from "../pages/Details";
import Error from "../pages/Error";
import Private from "./Private";
import Service from "../pages/Service";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/sign_in",
                element: <SignIn />
            },
            {
                path: "/sign_up",
                element: <SignUp />
            },
            {
                path: "/service",
                element: <Private><Service /></Private>
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
                element: <Private><Details /></Private>
            }
        ]
    },
]);

