import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add todo/i), { target: { value: "New Task" } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByText(/delete/i)[0];
    fireEvent.click(deleteBtn);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
