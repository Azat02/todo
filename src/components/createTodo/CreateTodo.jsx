
import "./createTodo.module.css"

const CreateTodo = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter some todo" />
                <button>+Add</button>
            </form>
        </div>
    )
}

export default CreateTodo;