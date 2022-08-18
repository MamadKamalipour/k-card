import WebsiteRoutes from "Routes/WebsiteRoutes";
import Dashboard from "UserDashboard";
import Page404 from "Screens/Page404";
export const routes = [
	{
		path: "/*",
		name: "WebsiteRoutes",
		element: <WebsiteRoutes />,
	},
	{
		path: "dashboard/*",
		name: "User Dashboard",
		element: <Dashboard />,
	},
	{
		path: "/404",
		name: "Not Found",
		element: <Page404 />,
	},
];
