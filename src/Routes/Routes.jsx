import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";


const router  = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/news/:id',
          element: <PrivateRoute> <News/></PrivateRoute>,
          loader: () => fetch('/latestNews.json')

        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path:'/register',
          element: <Register/>
        }

      ]
    },
  ]);

  export default router;