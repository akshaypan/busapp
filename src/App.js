import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Viewallbus from './components/Viewallbus';
import Addbus from './components/Addbus';

function App() {
  return (
    <div>
      <Home/>
      <Addbus/>
      <Viewallbus/>
    </div>
  );
}

export default App;
