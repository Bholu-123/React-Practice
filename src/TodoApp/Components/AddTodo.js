import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";

const AddTodo = ({ categories, allTodos, setAllTodos }) => {
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    categories: "",
  });

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: formInput.title,
      description: formInput.description,
      categories: formInput.categories,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newToDoObj);

    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setFormInput({
      title: "",
      description: "",
      categories: "",
    });
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title:</label>
        <input
          name="title"
          type="text"
          value={formInput.title}
          onChange={(e) => handleChange(e)}
          placeholder="What's the title of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <label>Description:</label>
        <input
          name="description"
          type="text"
          value={formInput.description}
          onChange={(e) => handleChange(e)}
          placeholder="What's the description of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <label>Categories</label>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            name="categories"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formInput.categories ?? ""}
            label="Categories"
            onChange={(e) => handleChange(e)}
          >
            {categories.map((cat) => {
              return (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="todo-input-item">
        <button
          className="primary-btn"
          type="button"
          onClick={handleAddNewToDo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
