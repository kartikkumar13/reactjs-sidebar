import { FaHome, FaShoppingBag } from 'react-icons/fa';
import { RiErrorWarningFill, RiFileUnknowFill } from 'react-icons/ri';
import { HiSupport } from 'react-icons/hi';
export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <FaHome />
    },
    {
        title: "Shop",
        path: "/shop",
        icon: <FaShoppingBag />
    },
    {
        title: "About",
        path: "/about",
        icon: <RiFileUnknowFill />
    },
    {
        title: "Privacy Policy",
        path: "/privacy-policy",
        icon: <RiErrorWarningFill />
    },
    {
        title: "Contact Us",
        path: "/contact-us",
        icon: <HiSupport />
    }
]