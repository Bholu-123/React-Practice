import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ title, info, index, onClick, isOpen }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => onClick(index)}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
