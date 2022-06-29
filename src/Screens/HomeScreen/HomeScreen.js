import { Cards } from "components";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "assets/earth-love-earth-day.json";
import * as animationData2 from "assets/lf30_editor_h64eijlm.json";
import image1 from "assets/images/card1.png";
import image2 from "assets/images/card2.png";
import image3 from "assets/images/card3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectFade, Navigation, Pagination } from "swiper";
import { BlobButton, FloatingButton, Modal, LoginModal } from "components";

import { ReviewCard } from "components";

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
		<>
			{/* Hero */}
			<section className=''>
				<Swiper
					spaceBetween={30}
					effect={"fade"}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					modules={[EffectFade, Navigation]}
					className='mySwiper1'
				>
					<SwiperSlide>
						<img
							alt='slide'
							src='https://swiperjs.com/demos/images/nature-1.jpg'
							style={{ width: "100%", maxHeight: "100vh" }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							alt='slide'
							src='https://swiperjs.com/demos/images/nature-2.jpg'
							style={{ width: "100%", maxHeight: "100vh" }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							alt='slide'
							src='https://swiperjs.com/demos/images/nature-3.jpg'
							style={{ width: "100%", maxHeight: "100vh" }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							alt='slide'
							src='https://swiperjs.com/demos/images/nature-4.jpg'
							style={{ width: "100%", maxHeight: "100vh" }}
						/>
					</SwiperSlide>
				</Swiper>
			</section>
			<section className=' container section first-section'>
				<div className='intro'>
					<h1>
						با <span className='color-orange'>K Card</span> حرفه ای تر کار کنید
					</h1>
					<p>
						برای آغاز هر همکاری، معرفی درست حرف اول را می زند! کی کارت این امکان را به
						شما می دهد تا به سادگی اطلاعات لازم خود اعم از راه های ارتباطی و شبکه های
						اجتماعی را به مخاطبانتان منتقل کنید.
					</p>
				</div>
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
			</section>
			{/* seconde section */}
			<section className='full-section seconde-section'>
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
						نسل جدید کارت ویزیت های هوشمند که با استفاده از تکنولوژی nfc اطلاعات کاربر
						رو داخل خودشون ذخیره و با نگه داشتن جلوی موبایل مخاطب کل اطلاعاتی که داخل یه
						کارت ویزیت معمولی هست به علاوه اطلاعات دیگه از جمله ادرس تمامی شبکه های
						اجتماعی به گوشی فرد مقابل میرسونه و شما رو از دردسر طراحی و چاپ هزارتا کارت
						ویزیت قدیمی راحت میکنه
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

			{/* Reviews */}
			<section className=' review-section'>
				<h3>نظرات مشتریان ما</h3>
				<Swiper
					loop={true}
					pagination={{
						clickable: true,
					}}
					slidesPerView={4}
					spaceBetween={80}
					centeredSlides={true}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper2'
				>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
					<SwiperSlide>
						<ReviewCard />
					</SwiperSlide>
				</Swiper>
			</section>

			<Modal
				id='RegisterLoginModal'
				buttonText={
					<FloatingButton
						position={{ top: "50%", left: "0", right: "-30px", bottom: "0" }}
						backgroundColor='#ff652f'
					>
						<i className='fas fa-user usericon'></i>
					</FloatingButton>
				}
				modalTitle='ورود'
				isCentered
			>
				<LoginModal />
			</Modal>
		</>
	);
};

export default HomeScreen;
