import React, { useState, useEffect } from 'react';
// import './style.css';

export default function NestedApiTable() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch('https://swapi.py4e.com/api/people/');
      const data = await res.json();
      const detailedPeople = await Promise.all(
        data?.results?.map(async (item) => {
          //Films
          const films = await Promise.all(
            item?.films?.map(async (filmUrl) => {
              const res = await fetch(filmUrl);
              const film = await res.json();
              console.log('++film', film);
              return film.title;
            })
          );
          //Vehicles
          const vehicles = await Promise.all(
            item?.vehicles?.map(async (vehicleUrl) => {
              const res = await fetch(vehicleUrl);
              const vehicle = await res.json();
              console.log('vehicle: ', vehicle);
              return vehicle.name;
            })
          );
          console.log('vehicles', vehicles);

          return {
            name: item?.name,
            film: films?.join(', ') || '-',
            vehicle: vehicles?.join(', ') || '-',
          };
        })
      );
      console.log(detailedPeople);
      setPeople(detailedPeople);
    };
    fetchPeople();
  }, []);
  console.log('++people', people);
  return (
    <div>
      <table border="1" cellpadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Films</th>
            <th>Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {people?.map((person) => (
            <tr>
              <td>{person.name}</td>
              <td>{person.film}</td>
              <td>{person.vehicle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
