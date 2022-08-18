import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "flag-icon-css/css/flag-icons.min.css";
import "core-js";
import "./assets/fonts//font-style.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "assets/fontawosome/css/all.min.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./global.scss";

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ["en", "fas"],
		fallbackLng: "en",
		detection: {
			order: ["cookie", "htmlTag", "localStorage", "path"],
			caches: ["cookie"],
		},
		backend: {
			loadPath: "locales/{{lng}}/translation.json",
		},
	});

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById("root")
);
