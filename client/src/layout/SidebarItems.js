import React from "react";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import MailIcon from "@material-ui/icons/Mail";
import WarningIcon from "@material-ui/icons/Warning";

const SidebarItems = [
    {
        text: "Home",
        link: "/home",
        icon: <AssessmentOutlinedIcon />,
    },
    {
        text: "Orders",
        link: "/orders",
        icon: <FolderOutlinedIcon />,
    },
    {
        text: "Products",
        link: "/products",
        icon: <ShoppingCartOutlinedIcon />,
    },
    {
        text: "Customers",
        link: "/customers",
        icon: <PeopleAltOutlinedIcon />,
    },
];

const SidebarItemsDown = [
    {
        text: "All mail",
        link: "/allMail",
        icon: <MailIcon />,
    },
    {
        text: "Trash",
        link: "/trash",
        icon: <DeleteOutlinedIcon />,
    },
    {
        text: "Spam",
        link: "/spam",
        icon: <WarningIcon />,
    },
];

export { SidebarItems, SidebarItemsDown };
