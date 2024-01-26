import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";


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
          element: <News/>

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