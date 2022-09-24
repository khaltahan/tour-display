// Required imports
import React from "react";
import Tour from "./Tour";

// Main function
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // Key needed as the back-end needs to differentiate Tour
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
