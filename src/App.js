import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import ToggleMode from "./components/ToggleMode";
import withTimeTracker from "./HOC/withTimeTracker";

const App = ({ timeSpent }) => {
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours}:${minutes}:${seconds}`;
    };
  return (
    <>
      <header>
        <section className="title-section">

          <h1>Todo</h1>
            <p>Время, проведенное на этой странице: {formatTime(timeSpent)}</p>
            <p>Текущее время: {new Date().toLocaleTimeString()}</p>
          <ToggleMode />
        </section>
      </header>
      <main>
        <section className="todo-section">
          <AddTodoForm />
          <TodoList />
        </section>
      </main>
      <footer className="summary-section">
        <TotalCompleteItems />
      </footer>
    </>
  );
};

export default  withTimeTracker(App);
