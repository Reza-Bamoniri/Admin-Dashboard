import { BiCommentDetail } from "react-icons/bi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";

export default [
  {
    id: crypto.randomUUID(),
    title: "Menu",
    items: [
      {
        id: crypto.randomUUID(),
        href: "/",
        title: "Dashboard",
        icon: HiOutlineHome,
      },
      {
        id: crypto.randomUUID(),
        href: "/products",
        title: "Products",
        icon: HiOutlineShoppingCart,
      },
      {
        id: crypto.randomUUID(),
        href: "/users",
        title: "Users",
        icon: HiOutlineUsers,
      },
      {
        id: crypto.randomUUID(),
        href: "/tickets",
        title: "Tickets",
        icon: HiOutlineChatBubbleLeftRight,
      },
      {
        id: crypto.randomUUID(),
        href: "/comments",
        title: "Comments",
        icon: BiCommentDetail,
      },
    ],
  },
];
