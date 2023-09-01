import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import TourList from "./TourList";

const url = "https://course-api.com/react-tours-project";

const ToursWrapper = () => {
  const [allTour, setAllTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTour = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setAllTour(tours);
  };

  const removeTour = (id) => {
    const newTours = allTour.filter((tour) => tour.id !== id);
    setAllTour(newTours);
  };

  useEffect(() => {
    setLoading(true);

    fetchTour();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (allTour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTour()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <TourList allTour={allTour} removeTour={removeTour} />
    </main>
  );
};

export default ToursWrapper;
