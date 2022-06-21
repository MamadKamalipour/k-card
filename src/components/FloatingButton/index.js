import React from "react";
import styled from "styled-components";
import "./index.scss";

const Button = styled.button`
	border: 0;
	outline: 0;
	position: fixed;
	top: ${(props) => (props.position.top ? props.position.top : "unset")};
	left: ${(props) => (props.position.left ? props.position.left : "unset")};
	bottom: ${(props) => (props.position.bottom ? props.position.bottom : "unset")};
	right: ${(props) => (props.position.right ? props.position.right : "unset")};
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#14a76c")};
	color: #fff;
	width: 70px;
	height: 70px;
	border-radius: 100%;
	::after {
		background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#14a76c")};
	}
`;
const FloatingButton = ({ onClick, type, children, position, backgroundColor }) => {
	return (
		<Button
			type={type}
			onClick={onClick}
			position={position}
			className='floatingButton'
			backgroundColor={backgroundColor}
		>
			{children}
		</Button>
	);
};

export default FloatingButton;
