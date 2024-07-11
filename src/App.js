import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Viewallbus from './components/Viewallbus';
import Addbus from './components/Addbus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/add' element={<Addbus/>}/>
      <Route  path='/viewall' element={<Viewallbus/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
