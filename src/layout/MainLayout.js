import { Header } from "components";
import React from "react";
import "./MainLayout.scss";
const MainLayout = ({ children }) => {
	return (
		<div className='MainLayout'>
			<header className='header'>
				<Header />
			</header>
			<main>{children}</main>
			<footer className='footer'>footer</footer>
		</div>
	);
};

export default MainLayout;
