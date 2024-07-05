import { React, useState, useEffect } from "react";
import "../css/coffee.css";
import startFill from "../assets/images/star-fill.svg";
import startNoFill from "../assets/images/star.svg";

function Coffee(props) {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {coffee.map((coffee) => (
        <div className="coffee-card" key={coffee.id}>
          <div className="coffee-card-image">
            <img className="" src={coffee.image} alt={coffee.name} />
          </div>
          <div className="coffee-card-title">
            <h3>{coffee.name}</h3>
          </div>
          <div className="coffee-card-price">
            <p>{coffee.price}</p>
          </div>
          <div className="coffee-card-rating">
            {(() => {
              if (coffee.rating) {
                return (
                  <>
                    <img src={startFill} alt="rating star icon" />
                    <div className="rating-number">{coffee.rating}</div>
                    <div className="rating-votes">({coffee.votes} votes)</div>
                  </>
                );
              } else {
                return (
                  <>
                    <img src={startNoFill} alt="rating star icon" />
                    <div className="rating-number">{coffee.rating}</div>
                    <div className="rating-votes">No Ratings</div>
                  </>
                );
              }
            })()}
          </div>
          <div className="coffee-card-stock">
            {(() => {
              if (!coffee.available) {
                return "Sold Out";
              }
            })()}
          </div>
        </div>
      ))}
    </>
  );
}

export default Coffee;
