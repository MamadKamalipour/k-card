// Material Dashboard 2 React layouts
import Dashboard from "UserDashboard/layouts/dashboard";
import Profile from "UserDashboard/layouts/profile";

// @mui icons
import Icon from "@mui/material/Icon";
import Users from "./layouts/Users";

const routes = [
	{
		type: "collapse",
		name: "Dashboard",
		key: "dashboard",
		icon: <Icon fontSize='small'>dashboard</Icon>,
		route: "/",
		link: "/dashboard",
		component: <Dashboard />,
	},
	{
		type: "collapse",
		name: "Users",
		key: "users",
		icon: <Icon fontSize='small'>group</Icon>,
		route: "/users",
		link: "users",
		component: <Users />,
	},

	{
		type: "collapse",
		name: "Setting",
		key: "Setting",
		icon: <Icon fontSize='small'>settings</Icon>,
		route: "setting",
		link: "setting",

		component: <Profile />,
	},
];

export default routes;
