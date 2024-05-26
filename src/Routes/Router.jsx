import { createBrowserRouter, } from "react-router-dom";
import Root from "../Components/Root";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: 1,
                element: <HomePage />
            }
        ]
    }
]);


export default router;