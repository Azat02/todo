import "./header.module.css"


const Header = (props) => {
    return (
        <header>
            <h1>Todos ({props.compleatTodos}/{props.todos})</h1>
        </header>
    )
}

export default Header;