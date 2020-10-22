import React, { useState } from "react";
import { data } from "./duLieu.js";
function ProductList(props) {
  let newData;
  const [dulieu, setDulieu] = useState(data);
  
  function handleClick(e) {
    // console.log(e.target.value);

    if (e.target.value === "all") {
      newData = data;
    } else {
      newData = data.filter((items) => items.title === e.target.value);
    }
    setDulieu(newData);
  }

  return (
    <React.Fragment>
      <div className="btns">
        <button value="all" onClick={handleClick}>
          All
        </button>
        <button value="fitness" onClick={handleClick}>
          Fitness
        </button>
        <button value="coaching" onClick={handleClick}>
          Coaching
        </button>
        <button value="event" onClick={handleClick}>
          Event
        </button>
        <button value="other" onClick={handleClick}>
          Other
        </button>
      </div>

      <div className="container">
        <div className="row">

        {dulieu.map((images) => {
          return (
            <div
              className="sigle-product col-lg-4"
              key={images.id}
              images={images}
              style={{ marginBottom: "30px"}}
            >
              <img src={images.image} alt={images.title} />
            </div>
          );
        })}

        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
