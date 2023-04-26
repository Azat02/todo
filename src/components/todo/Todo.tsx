import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, onEditTodo, onStatusChange } from "../../redux/todoSlice";
import { TodoType } from "../../types";
import css from "./todo.module.css";


type PropsType = TodoType & {
    // testProps: number
}

    const Todo: FC<PropsType> = (props) => {
    type TestStateT = <T> (a: T) => T
    const useTestState: TestStateT = (a) => {
        return a 
    }

    const res = useTestState<number>(25)
    const res2 = useTestState<string>('hello')

    console.log(res);
    console.log(res2);

    // const [x, setX] = useState(props.status);
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);


    // const handleEditing = () => {
    //     setEditing(true);
        
    // };

    // const handleEditSubmit = () => {
    //     setEditing(false);
    //     props.editTodo(props.id, newTitle);
    // };

    const [isEdit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState(props.title);

    const handleEdit = () => {
        setEdit(!isEdit)
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(onEditTodo({id: props.id, inputValue}))
        setEdit(false)
    }
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch( deleteTodo(props.id))
    }

    const handleChange = () => {
        dispatch(onStatusChange(props.id))
    }
    return (
        <div className={css.silver}>
            <div className={css.todo_wrapper}>
                <div>
                    {isEdit ? (<form onSubmit={submit}>
                                    <input type="text" value={inputValue} onChange={handleInput} />
                                    <button>Save</button>
                               </form>) : (<label >
                        <input checked={props.status} onChange={handleChange}  type="checkbox" className={css.checkbox} />
                        <input
                            type="text"
                            onClick={() => setEditing(true)}
                            value={editing ? newTitle : props.title}
                            onChange={(event) => setNewTitle(event.target.value)}
                            className={`${css.taskTitle} ${editing ? css.editing : ''} ${props.status ? css.compleated : ""}`}/>
                    </label>)}
                </div>
                <div>
                    {!editing && (
                        <button onClick={handleEdit} className={css.edit}>
                        Edit
                        </button>
                    )}
                    {editing && (
                        <button className={css.edit}>
                        Save
                        </button>
                    )}
                    <button onClick={handleDelete} className={css.del}>Del</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;








