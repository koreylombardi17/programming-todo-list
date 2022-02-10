import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className={`${todos.length === 0 ? "" : "todos-container"}`}>
      {todos.map((todo, key) => (
        <Todo
          todo={todo}
          key={key}
          text={todo.text}
          isComplete={false}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
