import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';
import { useSelector } from 'react-redux';



function App() {
  const todosArray = useSelector((state) => state.data)  
  const compleatTodos = todosArray.reduce((acc,item) => acc + item.status, 0);


  const newTodos = todosArray.map((item) =>( <Todo 
    id={item.id} 
    title={item.title} 
    status={item.status} 
    key={item.id}
    />));
  
  

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
