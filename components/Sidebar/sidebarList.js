// icons
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiShoppingCart, FiBox } from "react-icons/fi";
import { AiOutlineUser, AiOutlinePieChart } from "react-icons/ai";

export const menuList = [
  { name: "Dashboard", path: "/", icon: <MdOutlineDashboardCustomize /> },
  { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
  { name: "Customers", path: "/", icon: <AiOutlineUser /> },
  { name: "Products", path: "/products", icon: <FiBox /> },
  {
    name: "Analytics",
    path: "/",
    icon: <AiOutlinePieChart />,
    dropDownList: [
      { name: "Dropdown 1", path: "/" },
      { name: "Dropdown 2", path: "/" },
      { name: "Dropdown 3", path: "/" },
    ],
  },
  {
    name: "Another DropDown",
    path: "/",
    icon: <AiOutlinePieChart />,
    dropDownList: [
      { name: "Dropdown 1", path: "/" },
      { name: "Dropdown 2", path: "/" },
      { name: "Dropdown 3", path: "/" },
    ],
  },
];
