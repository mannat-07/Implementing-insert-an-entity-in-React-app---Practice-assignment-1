// src/App.jsx

import Home from './Home';
import './App.css'; // Import global styles
import { Route,Routes } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Form' element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;