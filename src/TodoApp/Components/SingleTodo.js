import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const SingleTodo = ({
  item,
  allTodos,
  setAllTodos,
  index,
  completedTodos,
  setCompletedTodos,
}) => {
  const handleToDoDelete = (index) => {
    console.log(index);
    console.log(allTodos);
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(reducedTodos));
    setAllTodos(reducedTodos);
  };

  const handleComplete = (index) => {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var minutes = date.getMinutes();
    var ss = date.getSeconds();
    var finalDate =
      dd + "-" + mm + "-" + yyyy + " at " + hh + ":" + minutes + ":" + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    let updatedCompletedList = [...completedTodos, filteredTodo];
    console.log(updatedCompletedList);
    setCompletedTodos(updatedCompletedList);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedList)
    );

    handleToDoDelete(index);
  };
  return (
    <>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.categories}</p>
      </div>
      <div>
        <AiOutlineDelete
          title="Delete?"
          className="icon"
          onClick={() => handleToDoDelete(index)}
        />
        <BsCheckLg
          title="Completed?"
          className=" check-icon"
          onClick={() => handleComplete(index)}
        />
      </div>
    </>
  );
};

export default SingleTodo;
