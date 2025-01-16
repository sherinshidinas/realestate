import React from "react";
import "./cards.scss";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="cards">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={`${item.img}`} alt="card-image" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={item.id}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/images/pin.png" alt="location-icon" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
         <div className="features">
         <div className="feature">
            <img src="/images/bed.png" alt="bed" />
            <span>{item.bedroom} bedroom</span>
          </div>

          <div className="feature">
            <img src="/images/bath.png" alt="bathroom" />
            <span>{item.bathroom} bathroom</span>
          </div>
         </div>

          
          <div className="icons">
            <div className="icon">
              <img src="/images/save.png" alt="save" />
            </div>

            <div className="icon">
              <img src="/images/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
