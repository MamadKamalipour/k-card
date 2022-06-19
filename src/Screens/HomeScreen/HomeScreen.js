import { Cards } from "components";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "assets/earth-love-earth-day.json";
import * as animationData2 from "assets/lf30_editor_h64eijlm.json";
import image3 from "assets/images/card3.png";
import "./index.scss";
import { BlobButton } from "components";

const HomeScreen = () => {
	const earthAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const clientAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData2,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<main>
			{/* first section */}
			<section className=' container section first-section'>
				<div className='intro'>
					<h1>
						با <span className='color-orange'>K Card</span> حرفه ای تر کار کنید
					</h1>
					<p>
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
						طراحان گرافیک است، چاپگرها و
					</p>
				</div>
				<Cards />
			</section>
			{/* seconde section */}
			<section className='container section seconde-section'>
				<div>
					<h4>
						چرا باید <span className='color-orange'>کارت هوشمند</span> بخریم؟
					</h4>
					<p>
						با خرید کارت هوشمند K Card میتونید خیلی حرفه ای تر خودتونو معرفی کنید و تو
						یه لحظه همه اطلاعاتی که میخواید رو با فرد مقابلتون به اشتراک بذارید علاوه بر
						این یکبار میخرید و همیشه استفاده میکنید با اینکار میتونید جلوی قطع شدن کلی
						درخت رو بگیرید و تو حفظ محیط زیست یه قدم حتی کوچیک بردارید
					</p>
				</div>
				<div>
					<Lottie
						style={{ cursor: "unset" }}
						options={earthAnimation}
						height={400}
						width={400}
						isClickToPauseDisabled
					/>
				</div>
			</section>
			{/* third section*/}
			<section className='container section third-section '>
				<div className='calltoaction-button'>
					<p>
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
						طراحان گرافیک است، چاپگرها و
					</p>
					<BlobButton isLink link='#' backgroundColor='#14a76c'>
						خرید
					</BlobButton>
				</div>
				<div>
					<Lottie
						style={{ cursor: "unset", fill: "transparent" }}
						options={clientAnimation}
						height={400}
						width={400}
						isClickToPauseDisabled
					/>
				</div>
			</section>
			{/* fourth section */}
			<section className='container section fourth-section'>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
					طراحان گرافیک است، چاپگرها و
				</p>
				<img src={image3} alt='' className='offer-image' />
			</section>
		</main>
	);
};

export default HomeScreen;
