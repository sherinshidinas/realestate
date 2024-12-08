import "./App.css";
import Home from "./pages/home/Home";
import ListPage from "./pages/listPage/ListPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
      ]
    },
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
