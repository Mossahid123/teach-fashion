import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import TopRated from "../Pages/TopRated";



const Routes = createBrowserRouter(
    [
        {
            path:"/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/top-rated",
                    element: <TopRated />
                },
            ]
        }
    ]
)
export default Routes