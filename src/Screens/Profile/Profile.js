import { Loading } from "components";
import { BlobButton, LanguageChanger } from "components";
import { user } from "FakeData";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { icons } from "values";
import { socialMediaColors } from "values/colors";
import vcf from "../../assets/Mammadk9.vcf";
import "./Profile.scss";

const Profile = () => {
	const { t } = useTranslation();
	const [isLtr, setIsLtr] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		if (document.querySelector("body").dir === "ltr") {
			setIsLtr(true);
		} else {
			setIsLtr(false);
		}
	}, [isLtr]);
	const location = useLocation().pathname.split("/")[1];
	useEffect(() => {
		if (user.userName === location) navigate("/404");
	}, []);

	return (
		<>
			{user ? (
				<main className='profile'>
					<div className='language-changer-wrapper'>
						<LanguageChanger />
					</div>
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
									<img src={user.avatar} alt='' className='avatar' />
								</div>
								<div className='description-col'>
									{/* Name */}

									{isLtr ? (
										<h3>
											{user.en.firstName} <span>{user.en.lastName}</span>
										</h3>
									) : (
										<h3>
											{user.fas.firstName} <span>{user.fas.lastName}</span>
										</h3>
									)}
									<p className='description'>
										{isLtr ? user.en.description : user.fas.description}
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* Call Or Email */}
					<section className='calling container'>
						<div className='calling-info'>
							<h4>{t("contact_me")}</h4>
							<div className='calling-buttons'>
								<BlobButton
									backgroundColor={"#fca311"}
									isLink
									link={`tel:${user.phoneNumber}`}
								>
									{t("phone_number")}
								</BlobButton>
								<BlobButton
									backgroundColor={"#ed143d"}
									isLink
									link={`mailto:${user.email}`}
								>
									{t("email")}
								</BlobButton>
								<BlobButton backgroundColor={"royalblue"} isLink link={vcf}>
									{t("add_contact")}
								</BlobButton>
							</div>
						</div>
					</section>
					{/* Social Media */}
					<section className='container social'>
						<h3>{t("social_medias")}</h3>
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
			) : (
				<Loading />
			)}
		</>
	);
};

export default Profile;
