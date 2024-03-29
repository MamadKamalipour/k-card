import i18next from "i18next";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { languages } from "utils/Languages";
import "./index.scss";

function LanguageChanger() {
	const currentlanguageCode = Cookies.get("i18next") || "en";
	const currentLanguage = languages.find((lang) => lang.code === currentlanguageCode);
	useEffect(() => {
		document.body.dir = currentLanguage.dir || "ltr";
	}, [currentLanguage]);

	return (
		<div className='language-changer-dropdown'>
			<button
				className='btn dropdown-toggle language-changer-button'
				type='button'
				id='dropdownMenuButton1'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				<span className={`flag-icon flag-icon-${currentLanguage.country_code}`}></span>
			</button>
			<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
				{languages.map((lang) => (
					<li key={lang.country_code}>
						<button
							className='dropdown-item'
							onClick={() => {
								window.location.reload();
								i18next.changeLanguage(lang.code);
							}}
							disabled={lang.code === currentLanguage.code}
						>
							<span className={`flag-icon flag-icon-${lang.country_code}`}></span>
							{lang.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default LanguageChanger;
