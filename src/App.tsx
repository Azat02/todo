import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';
import { useSelector } from 'react-redux';
import { RootState } from './redux';
import { TodoType } from './types';



function App() {
  const todosArray = useSelector((state: RootState) => state.data)  
  const compleatTodos = todosArray.reduce((acc: number,item: TodoType) => acc + Number(item.status), 0);
  // const test = false

  const newTodos = todosArray.map((item: TodoType) =>( <Todo id={item.id} {...item}/>));
  
  return (
    <div className="App">
      <Header todos = {todosArray.length} compleatTodos={compleatTodos} />
      <div className='content'>
        <CreateTodo />
        <div className='todosWrapper'>
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;
