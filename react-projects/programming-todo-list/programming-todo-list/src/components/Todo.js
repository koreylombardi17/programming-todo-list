import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Todo = ({ todo, todos, setTodos }) => {
  const completeTodoHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.text === todo.text) {
          el.isComplete = !el.isComplete;
          return el;
        }
        return el;
      })
    );
  };

  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.text !== todo.text));
  };

  return (
    <div className="todo-item-container-display todo-item-container-style">
      <div
        className={`center-vertically ${todo.isComplete ? "completed" : ""}`}
      >
        {todo.text}
      </div>
      <div className="center-vertically">
        <CheckCircleIcon onClick={completeTodoHandler}></CheckCircleIcon>
      </div>
      <div className="center-vertically">
        <DeleteIcon onClick={deleteTodoHandler}></DeleteIcon>
      </div>
    </div>
  );
};

export default Todo;
