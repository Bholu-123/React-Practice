import React, { useCallback, useEffect, useState } from "react";

const TypeheadSearchbox = ({
  setData,
  setError,
  query,
  setQuery,
  activeIndex,
  setActiveIndex,
  data,
}) => {
  const [isAutoComplete, setIsAutoComplete] = useState(true);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      // user enter
      if (activeIndex === null) return;

      setQuery(data[activeIndex].name);
      setData(null);
      setActiveIndex(null);
      setIsAutoComplete(false);
      return;
    }
    setIsAutoComplete(true);
    if (!data || data.length === 0) return;
    if (keyCode === 40) {
      // move down
      if (activeIndex === null || activeIndex === data.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    } else if (keyCode === 38) {
      // move up
      if (activeIndex === 0) setActiveIndex(data.length - 1);
      else setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const fetchData = useCallback(
    async (query) => {
      try {
        const response = await fetch(
          `https://demo.dataverse.org/api/search?q=${query}`
        );
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        console.log(data);
        setData(data.data.items);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    },
    [setData, setError]
  );

  useEffect(() => {
    if (query.length === 0 || !isAutoComplete) {
      setData([]);
      setError(null);
      return;
    }

    let timer = null;

    const debounce = (fn, delay) => {
      return function (...args) {
        let context = this;
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    };
    const debounceFetch = debounce(fetchData, 300);
    debounceFetch(query);

    return () => clearTimeout(timer);
  }, [query, fetchData, setData, setError, isAutoComplete]);

  return (
    <>
      <label className="label" htmlFor="search">
        Enter Person Name
      </label>
      <br />
      <input
        name="personName"
        className="input"
        id="personName"
        value={query}
        onChange={handleChange}
        placeholder="Enter your fav star war char"
        autoComplete="off"
        onKeyUp={handleKeyUp}
      />
    </>
  );
};

export default TypeheadSearchbox;
