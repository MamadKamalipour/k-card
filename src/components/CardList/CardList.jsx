import React from "react";
import Card from "../Card/Card";
import { user } from "../../FakeData";

function CardList() {
  return (
    <div>
      {/* about */}
      <div className="container">
        <div className="d-flex flex-column">
          <h4>درباره من</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
          </p>
        </div>
      </div>
      <Card
        backgroundColor="rgb(250,227,230)"
        iColor="rgb(233,122,141)"
        borderColor="rgb(246,213,219)"
        boxShadowColor="rgb(250,227,230)"
        icon="fa-solid fa-envelope"
        data={user.email}
      />
      <Card
        isLtr={true}
        backgroundColor="rgb(178,243,232)"
        iColor="rgb(34,183,160)"
        borderColor="rgb(167,238,229)"
        boxShadowColor="rgb(167,238,229)"
        icon="fa-solid fa-phone"
        data={user.phoneNumber}
      />
      <Card
        backgroundColor="rgb(250,227,230)"
        iColor="rgb(233,122,141)"
        borderColor="rgb(246,213,219)"
        boxShadowColor="rgb(250,227,230)"
        icon="icon fa-solid fa-location-check"
        data={user.location}
      />
      {user.socialMedias.map((item, index) => (
        <Card
          key={Math.random()}
          backgroundColor={
            index % 2 === 0 ? "rgb(178,243,232)" : "rgb(250,227,230)"
          }
          iColor={index % 2 === 0 ? "rgb(34,183,160)" : "rgb(233,122,141)"}
          borderColor={
            index % 2 === 0 ? "rgb(167,238,229)" : "rgb(246,213,219)"
          }
          boxShadowColor={
            index % 2 === 0 ? "rgb(167,238,229)" : "rgb(250,227,230)"
          }
          data={item}
          isLink={true}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default CardList;
