import React from "react";
import * as animationData from "assets/82345-404tune-teller.json";
import Lottie from "react-lottie";
import "./index.scss";

const Page404 = () => {
	const notFoundAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className='not-found-page'>
			<div className='animation-wrapper'>
				<Lottie
					style={{ cursor: "unset" }}
					options={notFoundAnimation}
					isClickToPauseDisabled
				/>
			</div>
		</div>
	);
};

export default Page404;
