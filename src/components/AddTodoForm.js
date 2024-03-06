import React, { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const [tooltipText, setTooltipText] = useState("Нажми кнопку ");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value , tooltip:tooltipText}));
    }
  };
  return (
    <form onSubmit={onSubmit} className="form-input" >
      <input
        id="todo-input"
        type="text"
        placeholder="Создать новый todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
        {/*<input*/}
        {/*    id="todo-input-tooltip"*/}
        {/*    type="text"*/}
        {/*    placeholder="todo tooltip..."*/}
        {/*    value={tooltipText}*/}
        {/*    onChange={(event) => setTooltipText(event.target.value)}*/}
        {/*/>*/}
      <button className="smooth-transition" type="submit">
        +
      </button>
    </form>
  );
};

export default AddTodoForm;
