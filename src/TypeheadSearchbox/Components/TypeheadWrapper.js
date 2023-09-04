import React, { useState } from "react";
import TypeheadSearchbox from "./TypeheadSearchbox";
import TypeheadList from "./TypeheadList";

const TypeheadWrapper = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <TypeheadSearchbox
        setData={setData}
        setError={setError}
        query={query}
        setQuery={setQuery}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        data={data}
      />
      <TypeheadList
        data={data}
        error={error}
        query={query}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default TypeheadWrapper;
