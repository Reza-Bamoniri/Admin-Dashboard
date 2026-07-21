import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Tickets from "./pages/Tickets";
import TicketDetails from "./pages/TicketDetails";
import Comments from "./pages/Comments";
import RootLayout from "./components/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<RootLayout/>),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/tickets/:ticketId",
        element: <TicketDetails />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ],
  },
]);

export default router;
