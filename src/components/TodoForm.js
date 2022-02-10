const TodoForm = ({ todoInputText, setTodoInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setTodoInputText({ text: e.target.value });
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (todoInputText.text === "") {
      return;
    }
    setTodos([...todos, { text: todoInputText.text, isComplete: false }]);
    setTodoInputText({ text: "", placeholder: "ENTER NEW TODO:" });
  };

  

  return (
    <div className="new-todo-form-container">
      <form onSubmit={submitTodoHandler} onClick={submitTodoHandler}>
        <div>
          <input
            value={todoInputText.text}
            className="full-width"
            type="text"
            placeholder={todoInputText.placeholder}
            onChange={inputTextHandler}
          ></input>
        </div>
        <div>
          <button className="full-width" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
