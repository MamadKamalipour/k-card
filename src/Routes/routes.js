import WebsiteRoutes from "Routes/WebsiteRoutes";
import Dashboard from "UserDashboard";

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
		name: "User Dashboard",
		element: <h2>Not Found</h2>,
	},
];
