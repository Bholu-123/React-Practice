import React, { useCallback, useState } from "react";
import InfiniteScroll from "./InfiniteScroll";

const InfiniteScrollWrapper = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      try {
        const promise = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNumber,
            })
        );
        const data = await promise.json();
        resolve();
        setData((prevData) => [...prevData, ...data.docs]);
      } catch (e) {
        reject();
      }
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <label className="label" htmlFor="search">
          Enter Search Text
        </label>
        <input
          className="input"
          type="text"
          value={query}
          onChange={handleInput}
        />
        <InfiniteScroll getData={getData} listData={data} query={query} />
      </div>
    </>
  );
};

export default InfiniteScrollWrapper;
