import React, { useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };
  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
 
  return (<div className="Porfa">
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
	  <div>
      {todos.map((todo) => (
        <div key={todo.id} className="text-center" >
          <div className="Caja" style={{display:"flex"}}>
            <div>{todo.text}</div>
            <button onClick={() => deleteTodo(todo.id)}>X</button>{" "}
          </div>
        </div>
      ))}
	  </div>
    </div>
	</div>
  );
};

export default Home;
