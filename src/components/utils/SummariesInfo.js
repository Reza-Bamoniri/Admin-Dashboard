import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUsers } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

const generateSummariesInfo = (
  productsLength,
  usersLength ,
  ticketsLength,
  adminsLength
) => {
  return [
    {
      id: 1,
      title: "Number of Products",
      value: productsLength,
      Icon: BiShoppingBag,
    },
    {
      id: 2,
      title: "Number of Users",
      value: usersLength,
      Icon: HiUsers,
    },
    {
      id: 3,
      title: "Number of Tickets",
      value: ticketsLength,
      Icon: HiDocumentText,
    },
    {
      id: 4,
      title: "Number of Managers",
      value: adminsLength,
      Icon: RiAdminFill,
    },
  ];
};

export { generateSummariesInfo };
