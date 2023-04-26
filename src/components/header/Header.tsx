import { FunctionComponent } from "react";
import "./header.module.css"

interface PropsType {
    compleatTodos: number,
    todos: number,
}


const Header: FunctionComponent<PropsType> = (props) => {
    return (
        <header>
            <h1>Todos ({props.compleatTodos}/{props.todos})</h1>
        </header>
    )
}

export default Header;