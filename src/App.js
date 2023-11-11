import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/error';
import "./styles.css";
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div>  
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (<Suspense fallback={<Shimmer/>}><About /></Suspense>),
            }, 
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading.............</h1>}>
                    <Grocery />
                </Suspense>),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);