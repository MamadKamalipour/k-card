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
			<footer className='footer'>
				<span>
					❤️ Developed and Designed By{" "}
					<a
						href='https://www.instagram.com/mammadk9/'
						target='blank'
						className='color-orange'
					>
						MohammadJavad Kamalipour
					</a>
				</span>
			</footer>
		</div>
	);
};

export default MainLayout;
