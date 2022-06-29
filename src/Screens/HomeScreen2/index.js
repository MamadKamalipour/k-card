import React from "react";
import image1 from "assets/images/card1.png";
import image2 from "assets/images/card2.png";
import image3 from "assets/images/card3.png";
import video from "assets/herovideo.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "./index.scss";
import Lottie from "react-lottie";
import * as animationData from "assets/earth-love-earth-day.json";

function HomeScreen2() {
	const earthAnimation = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<main>
			<div className='Hero'>
				<div className='container info-wrapper'>
					<div className='row'>
						<div className='col-12 col-md-6'>
							<div className='intro'>
								<h1>
									با <span className='color-orange'>NFC Card</span> حرفه ای تر کار
									کنید
								</h1>
								<p>
									برای آغاز هر همکاری، معرفی درست حرف اول را می زند! NFC کارت این
									امکان را به شما می دهد تا به سادگی اطلاعات لازم خود اعم از راه
									های ارتباطی و شبکه های اجتماعی را به مخاطبانتان منتقل کنید.
								</p>
							</div>
						</div>
						<div className='col-12 col-md-6'>
							{/* <Cards /> */}
							<div className='cards-wrapper'>
								<Swiper
									effect={"cards"}
									grabCursor={true}
									modules={[EffectCards]}
									className='mySwiper'
								>
									<SwiperSlide>
										<img src={image1} className='slider-image' alt='card' />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image2} className='slider-image' alt='card' />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image3} className='slider-image' alt='card' />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image3} className='slider-image' alt='card' />
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					// xmlns:xlink='http://www.w3.org/1999/xlink'
					width='100%'
					height='96px'
					viewBox='0 0 100 100'
					version='1.1'
					preserveAspectRatio='none'
					className='injected-svg'
					data-src='assets/img/dividers/divider-2.svg'
				>
					<path d='M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z'></path>
				</svg>
				<video src={video} muted loop autoPlay />
				<div className='video-overlay'></div>
			</div>
			<div className='second-section'>
				{/* seconde section */}
				<section className=''>
					<div>
						<h4>
							چرا باید <span className='color-orange'>کارت هوشمند</span> بخریم؟
						</h4>
						<p>
							با خرید کارت هوشمند K Card میتونید خیلی حرفه ای تر خودتونو معرفی کنید و
							تو یه لحظه همه اطلاعاتی که میخواید رو با فرد مقابلتون به اشتراک بذارید
							علاوه بر این یکبار میخرید و همیشه استفاده میکنید با اینکار میتونید جلوی
							قطع شدن کلی درخت رو بگیرید و تو حفظ محیط زیست یه قدم حتی کوچیک بردارید
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
			</div>
		</main>
	);
}

export default HomeScreen2;
