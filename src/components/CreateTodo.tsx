import { TodoTitle } from "../types";
import React, { useState } from "react";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={handleChange}
        placeholder="What do you want to do?"
        autoFocus
      />
    </form>
  );
};
