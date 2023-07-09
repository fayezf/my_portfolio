import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            }
        ]
    },
]);
