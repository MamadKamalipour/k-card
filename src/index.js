import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
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
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById("root")
);
