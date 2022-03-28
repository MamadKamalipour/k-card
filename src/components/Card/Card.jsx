import React from "react";
import styled from "styled-components";
import "./Card.scss";

function Card({
  backgroundColor,
  iColor,
  borderColor,
  boxShadowColor,
  data,
  isLink,
  icon,
  isLtr,
}) {
  const Icon = styled.i`
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 50%;
    font-size: 1.2rem;
    color: ${(props) => props.iColor};
    border: 1px solid ${(props) => props.borderColor};
    box-shadow: ${(props) => props.boxShadowColor} 0px 2px 8px 0px;
  `;

  return (
    <>
      <div
        className="card-wrapper card border-0"
        style={isLink && { cursor: "pointer" }}
      >
        <div className="card-wrapper__row row justify-content-center align-items-center ">
          <div className="col-2 d-flex justify-content-center align-items-center text-center">
            <Icon
              backgroundColor={backgroundColor}
              iColor={iColor}
              borderColor={borderColor}
              boxShadowColor={boxShadowColor}
              className={icon}
            />
          </div>
          <div className="col-9 w-75 info">
            {isLink ? (
              <a
                href={data.value}
                className="d-flex align-items-center justify-content-between"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex flex-column">
                  <h4 className="info__title">{data.title}</h4>
                  <p className="info__desc">{data.value}</p>
                </div>

                <i
                  className="fa-solid fa-arrow-right-from-line"
                  style={{
                    transform: "rotate(180deg)",
                    fontSize: "1rem",
                    backgroundColor: "#dfdfdf",
                    color: "#333",
                    padding: ".1rem .3rem",
                    borderRadius: "5px",
                  }}
                ></i>
              </a>
            ) : (
              <>
                <h4 className="info__title">{data.title}</h4>
                <p className="info__desc" style={isLtr && { direction: "ltr" }}>
                  {data.value}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
