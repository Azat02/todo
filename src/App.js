import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/createTodo/CreateTodo';
import Todo from './components/todo/Todo';

const todosArray = [
  {
    id: 1,
    title: "buy a laptop",
    status: false,
  },
  {
    id: 2,
    title: "buy a phone",
    status: true,
  },
  {
    id: 3,
    title: "buy a ipad",
    status: true,
  },
]

function App() {

  const newTodos = todosArray.map((item) =>( <Todo title={item.title} status={item.status}/>));
  const compleatTodos = todosArray.reduce((acc,item) => acc + item.status, 0);

  return (
    <div className="App">
      <Header todos = {todosArray.length} compleatTodos={compleatTodos}/>
      <div className='content'>
        <CreateTodo/>
        <div className='todosWrapper'>
          {/* <Todo title="buy a sugar"/>
          <Todo title="buy a salt"/>
          <Todo title="buy a cola"/>
          <Todo title="buy a bread"/> */}
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;
