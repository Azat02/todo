
import { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import "./createTodo.module.css"

const CreateTodo: FC = () =>{
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();
    const submit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue) {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input value={inputValue} onChange={handleChange} type="text" placeholder="Enter some todo" />
                <button>+Add</button>
            </form>
        </div>
    )
}

export default CreateTodo;



