import React from "react";
import SingleTour from "./SingleTour";

const TourList = ({ allTour, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {allTour.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default TourList;
