import { LanguageChanger } from "components";
import { Header } from "components";
import React from "react";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
	return (
		<div className='MainLayout'>
			<header className='header'>
				<Header />
			</header>
			<div className='language-changer-wrapper'>
				<LanguageChanger />
			</div>
			<main>{children}</main>
			<footer className='footer'>
				<a
					href='https://www.instagram.com/mammadk9/'
					target='blank'
					className='color-orange'
				>
					MohammadJavad Kamalipour
				</a>
				<span> Developed and Designed By</span>
			</footer>
		</div>
	);
};

export default MainLayout;
