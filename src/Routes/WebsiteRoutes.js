import React from "react";
import { Navigate, Route, Routes } from "react-router";
import EditProfile from "../Screens/EditProfile";
import HomeScreen2 from "../Screens/HomeScreen2";
import Profile from "../Screens/Profile/Profile";
import Shop from "../Screens/Shop/Shop";
import MainLayout from "layout/MainLayout";

const WebsiteRoutes = () => {
	return (
		<MainLayout>
			<Routes>
				<Route path='/' element={<HomeScreen2 />} />
				<Route path='/:userName' element={<Profile />} />
				<Route path='/:userName/edit' element={<EditProfile />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</MainLayout>
	);
};

export default WebsiteRoutes;
