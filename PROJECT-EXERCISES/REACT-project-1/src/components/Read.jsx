import React, { Fragment, useContext, useState } from "react";
import { toast } from "react-toastify";
import { todoContext } from "./Wrapper";
const Read = () => {
  const [todos, setTodos] = useContext(todoContext);

  const deleteHandler = (id) => {
    toast.error(`${todos.find((todo) => todo.id === id).title} Deleted`);
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const completeAllTodos = (todos) => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, isCompleted: true };
      })
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-blue-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-[45%] p-6 bg-zinc-800 rounded-lg shadow-lg">
      <h1 className="text-4xl md:text-5xl font-thin text-white">All Todos</h1>

      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <button
          onClick={deleteAllTodos}
          className="text-lg font-thin text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Remove All
        </button>

        <button
          onClick={() => completeAllTodos(todos)}
          className="text-lg font-thin text-green-500 hover:text-green-400 transition-colors duration-300 flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Complete All
        </button>
      </div>

      {todos.length === 0 ? (
        <div className="text-center py-8 text-zinc-400 italic">
          No todos yet. Create one!
        </div>
      ) : (
        <ul className="flex flex-col gap-2 mt-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-3 bg-zinc-700 rounded-lg flex justify-between items-center ${
                todo.isCompleted
                  ? "border-l-4 border-green-500"
                  : "border-l-4 border-zinc-500"
              }`}
            >
              <div className="flex flex-col">
                <span
                  className={`text-lg ${
                    todo.isCompleted
                      ? "line-through text-green-500"
                      : "text-white"
                  }`}
                >
                  {todo.title}
                </span>
                <span className={`text-sm ${getPriorityColor(todo.priority)}`}>
                  Priority: {todo.priority}
                </span>
              </div>
              <button
                onClick={() => deleteHandler(todo.id)}
                className="text-red-500 hover:text-red-400 transition-colors duration-300 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Read;
