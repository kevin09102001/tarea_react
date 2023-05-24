import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import './App.css';

const App = () => {
  // Definición de estado para almacenar las tareas. Se inicializa con los datos guardados en localStorage si existen
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // Definición de estado para la nueva tarea a ser añadida
  const [newTodo, setNewTodo] = useState("");

  // Definición del hook useEffect que se ejecuta cada vez que el estado de 'todos' cambia.
  // Este guarda la última lista de tareas en localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Función para añadir una nueva tarea al estado 
  const addTodo = (e) => {
    e.preventDefault();
    // Verifica si newTodo está vacío
    if (newTodo.trim() === "") {
      alert("Por favor, escribe una tarea.");
      return;
    }
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Función para cambiar el estado de completado de una tarea en el estado 
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Función para eliminar todas las tareas de la lista
  const removeTodos = () => setTodos([]);

  // Función para eliminar solo las tareas completadas de la lista
  const removeCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  // Renderizado de la interfaz de usuario de la aplicación
  return (
    <div className="app">
      <h1>LISTA DE QUEHACERES</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>

      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}

      <button onClick={removeTodos}>Eliminar Todos</button>
      <button onClick={removeCompleted}>Eliminar Completados</button>
    </div>
  );
};

export default App;
