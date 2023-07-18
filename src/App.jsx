import './App.css';
import { Counter } from './components/Counter';
import { SingleLight } from './components/SingleLight';

function App() {
  return (
    <>
      <nav className="nav">
        <p>0 bulbs</p>
        <Counter text={'rows'} />
        <Counter text={'columns'} />
        <SingleLight />
      </nav>
    </>
  );
}

export default App;
