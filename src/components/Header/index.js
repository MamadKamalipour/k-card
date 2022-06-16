import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import styled from "styled-components";

const HeaderSection = styled.section`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Logo = styled.img`
	width: 130px;
	/* object-fit: fill; */
`;

const Header = () => {
	return (
		<HeaderSection>
			<Link to='/'>
				<Logo src={logo} alt='logo' />
			</Link>
		</HeaderSection>
	);
};

export default Header;
