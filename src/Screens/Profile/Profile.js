import React from "react";
import avatar from "assets/images/img1.jpg";
import "./Profile.scss";
import { BlobButton } from "components";
import { user } from "FakeData";
import { colors, socialMediaColors } from "values/colors";
import { icons } from "values";
import vcf from "../../assets/Alihoushnagi.vcf";
const Profile = () => {
	console.log(vcf);
	return (
		<main className='profile'>
			{/* Information */}
			<section className='information'>
				{/* avatar and description */}
				<div className='avatar-container container'>
					<div className='avatar-row'>
						<div className='avatar-col'>
							<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M58.1,-62.1C74.1,-55.7,85.2,-36.4,83.4,-18.8C81.7,-1.2,67,14.5,56.5,32.6C46,50.7,39.7,71.2,25.9,80.3C12,89.4,-9.4,87,-26.4,78.3C-43.4,69.6,-55.9,54.6,-65.7,37.8C-75.5,21.1,-82.5,2.7,-81.7,-16.6C-80.9,-35.9,-72.4,-56,-57.5,-62.5C-42.6,-69,-21.3,-62,-0.1,-61.8C21,-61.7,42,-68.4,58.1,-62.1Z'
									transform='translate(100 100)'
								/>
							</svg>
							<img src={avatar} alt='' className='avatar' />
						</div>
						<div className='description-col'>
							{/* Name */}

							<h3>
								محمدجواد <span>کمالی پور</span>
							</h3>
							<p className='description'>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
								استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
								ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
								استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
								ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
								و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Call Or Email */}
			<section className='calling container'>
				<div className='calling-info'>
					<h4>با من در تماس باشید</h4>
					<div className='calling-buttons'>
						<BlobButton backgroundColor={"#fca311"}> شماره تماس </BlobButton>
						<BlobButton backgroundColor={"#ed143d"}> ایمیل </BlobButton>
						<BlobButton backgroundColor={"royalblue"} isLink link={vcf}>
							افزودن به مخاطبین
						</BlobButton>
					</div>
				</div>
			</section>
			{/* Social Media */}
			<section className='container social'>
				<h3>شبکه های مجازی</h3>
				<div className='socailmedias'>
					{user.socialMedias.map((socialMedia, i) => {
						const socialColor = socialMediaColors.find(
							(social) => social.name === socialMedia.name
						);
						const icon = Object.entries(icons).find(
							(icon) => icon[0] === socialMedia.name
						);
						return (
							<BlobButton
								backgroundColor={socialColor.color}
								isLink
								link={socialMedia.link}
								key={i}
							>
								<div className='button-with-icon'>
									{socialMedia.name}
									<i className={icon[1]}></i>
								</div>
							</BlobButton>
						);
					})}
				</div>
			</section>
		</main>
	);
};

export default Profile;
