import React from "react";
import avatar from "assets/images/img1.jpg";
import "./index.scss";

function ReviewCard() {
	return (
		<div className='review-card'>
			<div className='card-wrapper'>
				<div className='avatar'>
					<img src={avatar} alt='' />
				</div>
				<span className='name'>Mamad kamalipour</span>
				<p className='description'>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
					طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
				</p>
			</div>
		</div>
	);
}

export default ReviewCard;
