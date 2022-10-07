// icons
import { MdOutlineDashboardCustomize, MdOutlineReviews } from "react-icons/md";
import { FiShoppingCart, FiBox } from "react-icons/fi";
import { AiOutlineUser, AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";

export const menuList = [
  { name: "Dashboard", path: "/", icon: <MdOutlineDashboardCustomize /> },
  { name: "Orders", path: "/orders", icon: <FiShoppingCart /> },
  { name: "Customers", path: "/customers", icon: <AiOutlineUser /> },
  { name: "Categorys", path: "/categorys", icon: <AiOutlineUser /> },
  {
    name: "Products",
    icon: <FiBox />,
    dropDownList: [
      { name: "Add New", path: "/products/new" },
      { name: "Products List", path: "/products" },
    ],
  },
  { name: "Brands", path: "/brands", icon: <HiOutlineClipboardList /> },

  
  {
    name: "Pages",
    icon: <AiOutlinePieChart />,
    dropDownList: [
      { name: "Home", path: "/pages/home" },
      { name: "About", path: "/pages/about" },
      { name: "Contact", path: "/pages/contact" },
    ],
  },

  {
    name: "Reviews",
    path: "/reviews",
    icon: <MdOutlineReviews />,
  },
];
