import React, { useState } from "react";
import "./MovieRow.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 346;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };
  return (
    <div className="movieRow">
      <h2 style={{ fontSize: "19px" }}>
        <strong
          style={{ color: "#108fce", fontWeight: "bold", fontSize: "24px" }}
        >
          prime{" "}
        </strong>
        {title}
      </h2>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <AiOutlineLeft stlye={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <AiOutlineRight style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-listarea">
        <div
          className="moveiRow-list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 346,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
