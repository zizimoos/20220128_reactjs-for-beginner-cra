const ShowTodoList = ({ todoList, setTodoList }) => {
  const deleteItem = (id) => {
    const newTodoList = todoList.filter((_, index) => index !== id);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <div style={{ display: "flex" }} key={index}>
          <li style={{ width: "100px" }}>{todo}</li>
          <button onClick={() => deleteItem(index)}>DEL</button>
        </div>
      ))}
    </ul>
  );
};

export default ShowTodoList;
