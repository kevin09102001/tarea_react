import React from 'react';

// Definición del componente TodoItem, que recibe tres props: index, todo y toggleTodo
const TodoItem = ({ index, todo, toggleTodo }) => {
  return (
    // Este componente retorna un div que contiene un checkbox y un span que muestra el texto de la tarea.
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(index)} 
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
