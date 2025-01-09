import React from "react"
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BadgeIcon from '@mui/icons-material/Badge';
import BookIcon from '@mui/icons-material/Book';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return(
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration : "none"}}>
                    <span className="logo">admin</span>
                </Link>
            </div>
            <div className="centre">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration : "none"}}>
                    <li>
                        <PersonIcon className="icon"/>
                    <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration : "none"}}>
                <li>
                    <InventoryIcon className="icon"/>
                <span>Products</span>
                </li>
                </Link>
                <Link to="/users" style={{textDecoration : "none"}}></Link>
                <li>
                    <ListAltIcon className="icon"/>
                <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className="icon"/>
                <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className="icon"/>
                <span>System Health</span>
                </li>
                <li>
                    <BookIcon className="icon"/>
                <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <BadgeIcon className="icon"/>
                <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                <span>Logout</span>
                </li>
            </ul>
            </div>   
            <div className="bottom">
                <div className="colorOptions" onClick={() => dispatch({type : "LIGHT"})}></div>
                <div className="colorOptions" onClick={() => dispatch({type : "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar