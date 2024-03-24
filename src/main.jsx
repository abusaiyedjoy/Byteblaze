import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Homepage/home.jsx";
import Blog from './Blogs/blog';
import Bookmark from "./Bookmarks/bookmark.jsx";
import Container from "./Container/container.jsx";
import BlogDetails from './Blogs/blogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container></Container>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=5')
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: "/bookmarks",
        element: <Bookmark></Bookmark>,
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);