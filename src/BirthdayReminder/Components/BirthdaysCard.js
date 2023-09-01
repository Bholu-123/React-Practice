import React, { useState } from "react";
import People from "../Data/Data";
import BirthdayList from "./BirthdayList";

const BirthdaysCard = () => {
  const [people, setPeople] = useState(People);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <BirthdayList people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default BirthdaysCard;
