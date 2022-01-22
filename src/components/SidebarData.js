import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FaceIcon from '@mui/icons-material/Face';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        link: "/Analytics"
    },
    {
        title: "Profile",
        icon: <FaceIcon />,
        link: "/profile"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings"
    },

]
