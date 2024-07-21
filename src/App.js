import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import Upload from './Components/pages/Upload';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/upload' element={<Upload />} />
  </Routes>
  );
}

export default App;
