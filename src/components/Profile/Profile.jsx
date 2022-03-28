import React from "react";
import "./Profile.scss";
import Hero from "../Hero/Hero";
import CardList from "../CardList/CardList";
import { user } from "../../FakeData";
function Profile() {
  return (
    <>
      <div className="container-fluid pt-3 ">
        <div className="device col-sm-12 col-lg-5 col-xl-4 col-md-7 mx-auto ">
          <div className="device__notch col-4"></div>
          <div className="device__content">
            <div className="device__content__info">
              <h1>{`${user.name} ${user.familyName}`}</h1>
              <div className="info tel">
                <i
                  className="fa-solid fa-badge-check "
                  style={{ color: "rgb(109,242,222)" }}
                ></i>
                <span>{user.phoneNumber.value}</span>
              </div>
              <div className="info email">
                <i
                  className="fa-solid fa-badge-check"
                  style={{ color: "rgb(109,242,222)" }}
                ></i>
                <span>{user.email.value}</span>
              </div>
            </div>
            <Hero
              background={user.avatar}
              overlayColor="rgb(71 82 98 / 90%)"
              className="device__content__hero"
            />
            <div className="rhombus">
              <img className="" src={user.avatar} alt={user.avatar} />
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
