
import css from "./todo.module.css";

const Todo = (props) => {

    
    return (
        <div>
            <div className={css.todo_wrapper}>
                <div>
                    <input checked={props.status} type="checkbox" className={css.checkbox} />
                    <p className={props.status ? css.compleated: ""}>{props.title}</p>
                </div>
                <div>
                    <button className={css.edit}>Edit</button>
                    <button className={css.del}>Del</button>
                </div>
            </div>
        </div>
    )

    
}

export default Todo;