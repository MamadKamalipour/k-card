import React from "react";
import { Route, Routes } from "react-router";
import EditProfile from "../Screens/EditProfile";
import HomeScreen from "../Screens/HomeScreen";
import Profile from "../Screens/Profile";
import Shop from "../Screens/Shop";

const WebsiteRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/:userName' element={<Profile />} />
			<Route path='/:userName/edit' element={<EditProfile />} />
			<Route path='/shop' element={<Shop />} />
		</Routes>
	);
};

export default WebsiteRoutes;
