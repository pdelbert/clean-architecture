import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import { 
  PageOne, 
  PageThree, 
  PageTwo 
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />,
  },
  {
    path: "/page-two",
    element: <PageTwo />,
  },
  {
    path: "/page-three",
    element: <PageThree />,
  },
]);

export {
  router,
  RouterProvider
}
