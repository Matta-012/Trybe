import './App.css';

const Task = (value) => {
  return (
    <li>{ value }</li>
  );
}

function App() {
  const tasks = ['Pedir lanche', 'Pagar', 'Comer', 'Dormir'];
  return (
    <ol>
      { tasks.map((task) => Task(task)) }
    </ol>
  );
}

export default App;
