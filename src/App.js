import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/about' element={<Payments/>}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
