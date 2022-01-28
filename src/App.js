import { useEffect, useState } from "react";
import ShowTodoList from "./components/ShowTodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    todo
      ? setTodoList((prev) => [todo, ...prev])
      : alert("Please enter a todo");
    setTodo("");
    localStorage.setItem("todoList", JSON.stringify([todo, ...todoList]));
  };

  useEffect(() => {
    const todoListFromLocalstorage = JSON.parse(
      localStorage.getItem("todoList")
    );
    if (todoListFromLocalstorage !== null) {
      setTodoList(todoListFromLocalstorage);
    }
  }, []);
  return (
    <div className="App">
      <h1>Hello, What are you going to do Today?</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write to do ..."
          onChange={onChange}
          value={todo}
        />
        <button type="submit">add todo</button>
      </form>
      <ShowTodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
