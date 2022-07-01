import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import EditProfile from "../Screens/EditProfile";
import HomeScreen from "../Screens/HomeScreen";
import Shop from "../Screens/Shop/Shop";
import MainLayout from "layout/MainLayout";
import { Loading } from "components";

const WebsiteRoutes = () => {
	const Profile = React.lazy(() => import("Screens/Profile/Profile")); // Lazy-loaded

	return (
		<Suspense fallback={<Loading />}>
			<MainLayout>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/:userName' element={<Profile />} />
					<Route path='/:userName/edit' element={<EditProfile />} />
					<Route path='/shop' element={<Shop />} />
				</Routes>
			</MainLayout>
		</Suspense>
	);
};

export default WebsiteRoutes;
