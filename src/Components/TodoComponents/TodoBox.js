import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoBox = () => {
  const [todo, SetTodo] = useState("");
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoBox;
