import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Profile from "../../Pages/Aothers/Profile/Profile";
import TarmsAndCodition from "../../Pages/Aothers/TarmsAndCondition/TarmsAndCodition";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News/News";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-beige.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-beige.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-beige.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/tarms',
                element: <TarmsAndCodition></TarmsAndCodition>
            },
            {
                path: '/profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            }
        ]
    }

])