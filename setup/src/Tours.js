// Required imports
import React from "react";
import Tour from "./Tour";

// Main function
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Khalid's tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // Key needed as the back-end needs to differentiate Tour
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
