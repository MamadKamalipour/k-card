import React from "react";
import "./Profile.scss";
import Hero from "../Hero/Hero";
import avatar from "../../assets/images/img1.jpg";
import CardList from "../CardList/CardList";
function Profile() {
  return (
    <>
      <div className="container-fluid pt-3 ">
        <div className="device col-sm-12 col-lg-5 col-xl-4 col-md-7 mx-auto ">
          <div className="device__notch col-4"></div>
          <div className="device__content">
            <div className="device__content__info">
              <h1>محمدجواد کمالی پور </h1>
              <div className="info tel">
                <i className="fa fa-phone">icon</i>
                <span>+98 902 716 5900</span>
              </div>
              <div className="info email">
                <i className="fa fa-email">icon</i>
                <span>mohammad.kp8093@gmail.com</span>
              </div>
            </div>
            <Hero
              background={avatar}
              overlayColor="rgb(71 82 98 / 90%)"
              className="device__content__hero"
            />
            <div class="rhombus">
              <img className="" src={avatar} alt={avatar} />
            </div>
          </div>
          <div className="container mt-5">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
