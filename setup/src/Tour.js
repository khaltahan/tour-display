// Required imports
import React, { useState } from "react";

// Main function
const Tour = ({ id, image, info, price, name, removeTour }) => {
  // Declared states
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* Only display 200 characters, but if user clicks Read More, display the whole paragraph */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn"
          id="delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
