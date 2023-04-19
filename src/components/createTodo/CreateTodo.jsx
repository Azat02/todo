
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import "./createTodo.module.css"

const CreateTodo = () =>{
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault();
        if (inputValue) {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    }

    const handleChange = (e) => {
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



