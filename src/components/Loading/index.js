import React from "react";
import logo from "assets/images/logo.png";
import "./index.scss";

function Loading() {
	return (
		<div className='loader-wrapper'>
			<img src={logo} alt='Logo' className='loader' />
		</div>
	);
}

export default Loading;
