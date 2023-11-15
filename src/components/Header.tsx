import { TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>
                ToDo
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60" />
                </a>
            </h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
    );
};
