import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <>
      <nav className="nav">
        <p>0 bulbs</p>
        <Counter text={'rows'} />
        <Counter text={'columns'} />
      </nav>
    </>
  );
}

export default App;
