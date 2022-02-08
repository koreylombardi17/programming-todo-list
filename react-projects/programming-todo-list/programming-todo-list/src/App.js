import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoInputText, setTodoInputText] = useState({
    text: "",
    placeholder: "ENTER NEW TODO:",
  });

  // localStorage returns HTMLCollection.
  // Function parses localStorage to an array
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const [todos, setTodos] = useState(getLocalStorage);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      const localStorageArr = getLocalStorage();
      // Case: Todo was added, update localStorage
      if (localStorageArr.length < todos.length) {
        localStorageArr.push(todos[todos.length - 1]);
        localStorage.setItem("todos", JSON.stringify(localStorageArr));
      } // Case: Todo was deleted, update localStorage
      else {
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    }
  }, [todos]);

  return (
    <div className="center">
      <Header />
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        todoInputText={todoInputText}
        setTodoInputText={setTodoInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
