import React from "react";

const TypeheadList = ({ data, error, query, activeIndex }) => {
  console.log(query, data);
  return (
    <>
      {error && <p>Something weng wrong</p>}
      {query.length > 0 && data && data.length === 0 && <p>No Data</p>}
      {data && data.length > 0 && (
        <ul className="listBoxContainer">
          {data.map((item, index) => (
            <li
              className={`listBoxItem ${
                index === activeIndex ? "activeItem" : ""
              }`}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TypeheadList;
