import React from "react";
import SingleCard from "./SingleCard";

const ReviewWrapper = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <SingleCard />
      </section>
    </main>
  );
};

export default ReviewWrapper;
