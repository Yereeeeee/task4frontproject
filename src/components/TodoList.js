import React from "react";
//Redux
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import Tooltip from "./Tooltip";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="todo-list">
      {todos.map((todo, id) => (
        <Tooltip text={todo.tooltip} key={todo.title}>

          <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
        </Tooltip>
      ))}
    </ul>
  );
};

export default TodoList;
